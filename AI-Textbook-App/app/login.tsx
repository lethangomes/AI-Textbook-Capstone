import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { login } from '../api/login/loginApi';

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDzWMOhboHKYOhNZJS4fHapGQnZoPuVqvk",
  authDomain: "ai-textbook-capstone.firebaseapp.com",
  projectId: "ai-textbook-capstone",
  storageBucket: "ai-textbook-capstone.firebasestorage.app",
  messagingSenderId: "540271781281",
  appId: "1:540271781281:web:2f3dfa3c789a010da657e0",
  measurementId: "G-ZNNRQLGV3C"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function AuthScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [isSignInPasswordSecure, setIsSignInPasswordSecure] = useState(true);
  const [signUpUsername, setSignUpUsername] = useState(''); 
  const [email, setEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignUpPasswordSecure, setIsSignUpPasswordSecure] = useState(true);
  const [isConfirmPasswordSecure, setIsConfirmPasswordSecure] = useState(true);

  const onSignIn = async () => {

    login(signInEmail, signInPassword);
    // try {
    //   const userCredential = await signInWithEmailAndPassword(
    //     auth,
    //     signInEmail,
    //     signInPassword
    //   );
      
    //   Alert.alert('Login Success', `Welcome back, ${userCredential.user.email}!`);
    //   router.replace('/home');

    // } catch (error: any) {
    //   Alert.alert('Login Failed', error.message);
    // }
  };

  const onCreateAccount = async () => {
    if (signUpPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        signUpPassword
      );
      Alert.alert('Success!', `Account created for ${userCredential.user.email}. Please sign in.`);
      setActiveTab('signin');
      
    } catch (error: any) {
      Alert.alert('Sign Up Failed', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.innerContainer}>
          {}
          <Text style={styles.logoText}>TextbookAI</Text>
          <Text style={styles.headerSubtitle}>Access your interactive learning platform</Text>

          {}
          <View style={styles.tabContainer}>
            <Pressable
              style={[styles.tabButton, activeTab === 'signin' && styles.tabButtonActive]}
              onPress={() => setActiveTab('signin')}>
              <Text style={styles.tabButtonText}>Sign In</Text>
            </Pressable>
            <Pressable
              style={[styles.tabButton, activeTab === 'signup' && styles.tabButtonActive]}
              onPress={() => setActiveTab('signup')}>
              <Text style={styles.tabButtonText}>Sign Up</Text>
            </Pressable>
          </View>

          {}
          <View style={styles.formCard}>
            {activeTab === 'signin' ? (
              <>
                <Text style={styles.formTitle}>Welcome back</Text>
                <Text style={styles.formSubtitle}>Enter your email and password</Text>
                <Text style={styles.label}>Email</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#777"
                    value={signInEmail}
                    onChangeText={setSignInEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                  />
                </View>

                <Text style={styles.label}>Password</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="#777"
                    value={signInPassword}
                    onChangeText={setSignInPassword}
                    secureTextEntry={isSignInPasswordSecure}
                    autoCapitalize="none"
                  />
                  <Pressable
                    style={styles.eyeIcon}
                    onPress={() => setIsSignInPasswordSecure((prev) => !prev)}>
                    <Feather
                      name={isSignInPasswordSecure ? 'eye-off' : 'eye'}
                      size={20}
                      color="#A0A0A0"
                    />
                  </Pressable>
                </View>
                <Pressable style={styles.button} onPress={onSignIn}>
                  <Text style={styles.buttonText}>Sign In</Text>
                </Pressable>
              </>
            ) : (

              <>
                <Text style={styles.formTitle}>Create your account</Text>
                <Text style={styles.formSubtitle}>
                  Enter your information and join TextbookAI
                </Text>

                <Text style={styles.label}>Username (optional)</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Choose a username"
                    placeholderTextColor="#777"
                    value={signUpUsername}
                    onChangeText={setSignUpUsername}
                    autoCapitalize="none"
                  />
                </View>

                <Text style={styles.label}>Email</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#777"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                <Text style={styles.label}>Password</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Create a password, minimum 8 characters"
                    placeholderTextColor="#777"
                    value={signUpPassword}
                    onChangeText={setSignUpPassword}
                    secureTextEntry={isSignUpPasswordSecure}
                    autoCapitalize="none"
                  />
                  <Pressable
                    style={styles.eyeIcon}
                    onPress={() => setIsSignUpPasswordSecure((prev) => !prev)}>
                    <Feather
                      name={isSignUpPasswordSecure ? 'eye-off' : 'eye'}
                      size={20}
                      color="#A0A0A0"
                    />
                  </Pressable>
                </View>

                <Text style={styles.label}>Confirm Password</Text>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm your password"
                    placeholderTextColor="#777"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={isConfirmPasswordSecure}
                    autoCapitalize="none"
                  />
                  <Pressable
                    style={styles.eyeIcon}
                    onPress={() => setIsConfirmPasswordSecure((prev) => !prev)}>
                    <Feather
                      name={isConfirmPasswordSecure ? 'eye-off' : 'eye'}
                      size={20}
                      color="#A0A0A0"
                    />
                  </Pressable>
                </View>

                <Pressable style={styles.button} onPress={onCreateAccount}>
                  <Text style={styles.buttonText}>Create Account</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#121212' },
  container: { flex: 1, justifyContent: 'center' },
  innerContainer: { padding: 24 },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#A0A0A0',
    textAlign: 'center',
    marginBottom: 32,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#2C2C2E',
    borderRadius: 10,
    marginBottom: 24,
    padding: 4,
  },
  tabButton: { flex: 1, paddingVertical: 12, borderRadius: 8, alignItems: 'center' },
  tabButtonActive: { backgroundColor: '#007AFF' },
  tabButtonText: { color: '#FFFFFF', fontWeight: '600', fontSize: 16 },
  formCard: { backgroundColor: '#1C1C1E', borderRadius: 16, padding: 24 },
  formTitle: { fontSize: 22, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 8 },
  formSubtitle: { fontSize: 14, color: '#A0A0A0', marginBottom: 24 },
  label: { fontSize: 14, fontWeight: '500', color: '#A0A0A0', marginBottom: 8 },
  inputWrapper: { marginBottom: 16, justifyContent: 'center' },
  input: {
    backgroundColor: '#2C2C2E',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    fontSize: 16,
    paddingRight: 50,
  },
  eyeIcon: { position: 'absolute', right: 16, padding: 4 },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
});