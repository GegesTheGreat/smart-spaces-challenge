import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/AppButton';
import { ScreenContainer } from '@/components/ScreenContainer';
import { colours } from '@/theme/colours';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';

const futureSteps = [
  'Inspect the smart space and its customer goal.',
  'Adjust available controls and respond to events.',
  'Balance comfort, energy, budget and reliability.',
  'Review the result and improve the next decision.',
];

export default function HelpScreen() {
  const router = useRouter();

  return (
    <ScreenContainer testID="help-screen">
      <View style={styles.card}>
        <Text style={styles.title}>How the finished game will work</Text>
        <Text style={styles.body}>
          Phase 0 provides the app shell. The playable steps below are added
          incrementally in later phases.
        </Text>
        <View style={styles.list}>
          {futureSteps.map((step, index) => (
            <View key={step} style={styles.listItem}>
              <Text style={styles.number}>{index + 1}</Text>
              <Text style={styles.listText}>{step}</Text>
            </View>
          ))}
        </View>
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
  list: {
    gap: spacing.sm,
  },
  listItem: {
flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
  },
  number: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colours.teal,
    color: colours.white,
    textAlign: 'center',
    lineHeight: 28,
    fontWeight: '800',
  },
  listText: {
    flex: 1,
    color: colours.text,
    fontSize: typography.body,
    lineHeight: 24,
  },
});
