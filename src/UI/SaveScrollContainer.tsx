import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import { useCurrentTheme } from '../hooks/useTheme';

interface SaveScrollContainerProps {
  children: React.ReactChild | React.ReactNode;
  lightColor?: string;
  darkColor?: string;
  scrollContent?: boolean;
  paddingDisabled?: boolean;
}

const SaveScrollContainer: FC<SaveScrollContainerProps> = ({
  children,
  lightColor,
  darkColor,
  paddingDisabled = false,
  scrollContent = true,
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
    <SafeAreaView style={screenBackground} edges={['top']}>
      {scrollContent ? (
        <ScrollView
          style={paddingChildren}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={paddingChildren}>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default React.memo(SaveScrollContainer);
