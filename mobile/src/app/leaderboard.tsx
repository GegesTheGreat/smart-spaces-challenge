import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { ScreenContainer } from '@/components/ScreenContainer';
import { colours } from '@/theme/colours';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';

export default function LeaderboardScreen() {
  const router = useRouter();

  return (
    <ScreenContainer testID="leaderboard-screen">
      <View style={styles.card}>
        <Text style={styles.title}>Leaderboard</Text>
        <Text style={styles.body}>
          Local scores and ranking rules are added after the core game loop.
          Phase 0 does not save player names or scores.
        </Text>
      </View>
      <AppButton label="Back to Home" onPress={() => router.navigate('/')} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colours.navy,
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
