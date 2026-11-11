import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { ScreenContainer } from '@/components/ScreenContainer';
import { colours } from '@/theme/colours';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <ScreenContainer testID="settings-screen">
      <View style={styles.card}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.body}>
          Sound, difficulty, colour preferences and reset controls are added
          in a later phase. No preferences are stored in Phase 0.
        </Text>
      </View>
      <AppButton label="Back to Home" onPress={() => router.navigate('/')} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colours.surface,
    borderColor: colours.border,
    borderRadius: 16,
    borderWidth: 1,
    padding: spacing.xl,
    gap: spacing.md,
  },
  title: {
    color: colours.navy,
    fontSize: typography.heading,
    fontWeight: '800',
  },
  body: {
    color: colours.text,
    fontSize: typography.body,
    lineHeight: 24,
  },
});
