// Calls backend to attempt to add a textbook with a given code
// to the currently logged in user. Returns true if successful, 

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native"

// false otherwise.
export async function addTextbookToLibrary(textbookCode: string): Promise<boolean> {
    try {
        const code: string = textbookCode.toUpperCase().trim()

        if (!code || code.length !== 6) {
            Alert.alert("Invalid code", "Should be 6 characters");
            return false;
        }

        const BACKEND_URL = process.env.EXPO_PUBLIC_API_BASE_URL

        // Get auth token
        const token = await AsyncStorage.getItem('access_token');
        if(!token){
            Alert.alert("Invalid token");
            return false;
        }

        // Make request to backend
        const upstream = await fetch(`${BACKEND_URL}/api/user_books/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
            body: JSON.stringify({ code }),
            cache: "no-store",
        })

        const text = await upstream.text()
        let data: any = {}
        try {
            data = text ? JSON.parse(text) : {}
        } catch (e) {
            Alert.alert("Invalid response from backend");
            return false;
        }

        if (!upstream.ok) {
            const error = data?.detail || data?.error || "Backend error"
            const status = upstream.status === 404 ? 200 : upstream.status
            // If backend says not found, we treat as graceful invalid code with 200
            if (upstream.status === 404) {
                Alert.alert("Invalid Code");
                return false;
            }

            // Unauthorized access
            if (upstream.status === 401) {
                Alert.alert("Error: Unauthorized access. Trying logging out and logging back in.");
                return false;
            }
            return false;
        }

        console.log(text);

        return true;
  } catch (e: any) {
    Alert.alert(e?.message || "Unexpected error");
    return false;
  }
}


