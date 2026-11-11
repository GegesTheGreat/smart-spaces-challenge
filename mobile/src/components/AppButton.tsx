import { Pressable, StyleSheet, Text } from 'react-native';

import { colours } from '@/theme/colours';
import { spacing } from '@/theme/spacing';
import { typography } from '@/theme/typography';

type AppButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
};

export function AppButton({
  label,
  onPress,
  variant = 'primary',
}: AppButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isPrimary ? styles.primary : styles.secondary,
        pressed && styles.pressed,
      ]}>
      <Text
        style={[
          styles.label,
          isPrimary ? styles.primaryLabel : styles.secondaryLabel,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 2,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  primary: {
    backgroundColor: colours.blue,
    borderColor: colours.blue,
  },
  secondary: {
    backgroundColor: colours.surface,
    borderColor: colours.blue,
  },
  pressed: {
    opacity: 0.75,
  },
  label: {
    fontSize: typography.body,
    fontWeight: '700',
  },
  primaryLabel: {
    color: colours.white,
  },
  secondaryLabel: {
    color: colours.blue,
  },
});
