import { Stack } from 'expo-router';

import { colours } from '@/theme/colours';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colours.background },
        headerStyle: { backgroundColor: colours.navy },
        headerTintColor: colours.white,
        headerTitleStyle: { fontWeight: '700' },
      }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="play" options={{ title: 'Play' }} />
      <Stack.Screen name="settings" options={{ title: 'Settings' }} />
      <Stack.Screen name="leaderboard" options={{ title: 'Leaderboard' }} />
      <Stack.Screen name="help" options={{ title: 'How to Play' }} />
    </Stack>
  );
}
