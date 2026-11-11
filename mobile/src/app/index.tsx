import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { ScreenContainer } from '@/components/ScreenContainer';
import { colours } from '@/theme/colours';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScreenContainer testID="home-screen">
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>DCoE TRANSITION YEAR</Text>
        <Text style={styles.title}>Smart Spaces Challenge</Text>
        <Text style={styles.description}>
          Manage smart spaces, respond to customer needs and balance
          comfort, energy, budget and reliability.
        </Text>
      </View>

      <View style={styles.actions}>
        <AppButton label="Start" onPress={() => router.navigate('/play')} />
        <AppButton
          label="Settings"
          onPress={() => router.navigate('/settings')}
          variant="secondary"
        />
        <AppButton
          label="Leaderboard"
          onPress={() => router.navigate('/leaderboard')}
          variant="secondary"
        />
        <AppButton
          label="How to Play"
          onPress={() => router.navigate('/help')}
          variant="secondary"
        />
      </View>

      <View style={styles.learningCard}>
        <Text style={styles.cardTitle}>DCoE learning journey</Text>
        <Text style={styles.cardText}>
          Later features connect the same app framework to Electronics,
          AIS or Commerce customer challenges.
        </Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  hero: {
    backgroundColor: colours.navy,
    borderRadius: 20,
    padding: spacing.xl,
    gap: spacing.md,
  },
  eyebrow: {
    color: colours.highlight,
    fontSize: typography.small,
    fontWeight: '700',
letterSpacing: 1.5,
  },
  title: {
    color: colours.white,
    fontSize: typography.title,
    fontWeight: '800',
  },
  description: {
    color: colours.white,
    fontSize: typography.body,
    lineHeight: 24,
  },
  actions: {
    gap: spacing.sm,
  },
  learningCard: {
    backgroundColor: colours.highlight,
    borderColor: colours.border,
    borderRadius: 16,
    borderWidth: 1,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  cardTitle: {
    color: colours.navy,
    fontSize: typography.subheading,
    fontWeight: '700',
  },
  cardText: {
    color: colours.text,
    fontSize: typography.body,
    lineHeight: 24,
  },
});
