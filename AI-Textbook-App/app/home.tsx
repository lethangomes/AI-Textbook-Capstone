import { View, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserName, logout } from '@/api/login/loginApi';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const[username, setUsername] = useState('');
  useEffect(() => {
    getUserName().then(newUsername => {
      setUsername(newUsername);
      console.log(username);
    });
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome {username}!</Text>
        <Text style={styles.subtitle}>You are successfully logged in.</Text>
      </View>
      <Button title="Test persistence" onPress={() => router.navigate('/')}></Button>
      <Button title="Log out" onPress={logout}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#A0A0A0',
  },
});
