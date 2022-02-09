import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { useCurrentTheme } from '../hooks/useTheme';

interface SaveScrollContainerProps {
  children: React.ReactChild | React.ReactNode;
  lightColor?: string;
  darkColor?: string;
  paddingDisabled?: boolean;
}

const SaveScrollContainer: FC<SaveScrollContainerProps> = ({
  children,
  lightColor,
  darkColor,
  paddingDisabled = false,
}) => {
  const { theme, isDark } = useCurrentTheme();

  const screenBackground = {
    backgroundColor: isDark
      ? darkColor
        ? darkColor
        : theme.colorScreen.backgroundColor
      : lightColor
      ? lightColor
      : theme.colorScreen.backgroundColor,
    minHeight: '100%',
  };

  const paddingChildren = {
    paddingHorizontal: paddingDisabled ? 0 : 15,
  };

  return (
    <SafeAreaView
      style={screenBackground}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <ScrollView style={paddingChildren}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(SaveScrollContainer);
