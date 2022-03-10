import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import { useCurrentTheme } from '../hooks/useTheme';
import { useDevice } from '../hooks/useDevice';

interface SaveScrollContainerProps {
  children: React.ReactChild | React.ReactNode;
  lightColor?: string;
  darkColor?: string;
  scrollContent?: boolean;
  paddingDisabled?: boolean;
  saveContent?: boolean;
}

const SaveScrollContainer: FC<SaveScrollContainerProps> = ({
  children,
  lightColor,
  darkColor,
  paddingDisabled = false,
  scrollContent = true,
  saveContent = false,
}) => {
  const { theme, isDark } = useCurrentTheme();
  const { isAndroid } = useDevice();

  const screenBackground = {
    backgroundColor: isDark
      ? darkColor
        ? darkColor
        : theme.colorScreen.backgroundColor
      : lightColor
      ? lightColor
      : theme.colorScreen.backgroundColor,
    minHeight: isAndroid ? '100%' : '105%',
    flex: 1,
  };

  const paddingChildren = {
    paddingHorizontal: paddingDisabled ? 0 : 15,
    flex: 1,
  };

  const Container = saveContent ? SafeAreaView : View;

  return (
    <Container style={[screenBackground]}>
      {scrollContent ? (
        <ScrollView
          style={[paddingChildren]}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[paddingChildren]}>{children}</View>
      )}
    </Container>
  );
};

export default React.memo(SaveScrollContainer);
