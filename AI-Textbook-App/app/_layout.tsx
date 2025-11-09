import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />

      <Stack.Screen
        name="home"
        options={{
          title: 'Home',
          headerStyle: { backgroundColor: '#1C1C1E' },
          headerTintColor: '#FFFFFF',
          headerLeft: () => null, 
          gestureEnabled: false, 
        }}
      />
    </Stack>
  );
}