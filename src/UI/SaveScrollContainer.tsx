import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { useCurrentTheme } from '../hooks/useTheme';

interface SaveScrollContainerProps {
  children: React.ReactChild | React.ReactNode;
}

const SaveScrollContainer: FC<SaveScrollContainerProps> = ({ children }) => {
  const { theme } = useCurrentTheme();

  return (
    <SafeAreaView
      style={theme.colorScreen}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <ScrollView style={{ paddingHorizontal: 15 }}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default SaveScrollContainer;
