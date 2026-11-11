import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { ScreenContainer } from '@/components/ScreenContainer';
import { colours } from '@/theme/colours';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';

export default function PlayScreen() {
  const router = useRouter();

  return (
    <ScreenContainer testID="play-screen">
      <View style={styles.card}>
        <Text style={styles.title}>Your first smart space is coming next</Text>
        <Text style={styles.body}>
          Phase 1 adds a playable office room with controls and visible
          score feedback. Phase 0 proves the app structure and navigation.
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

