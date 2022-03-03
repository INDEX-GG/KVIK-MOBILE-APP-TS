import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';

interface SaveAreaThemeProps {
  children: React.ReactChild | React.ReactNode;
}

const SaveAreaTheme: FC<SaveAreaThemeProps> = ({ children }) => {
  const { theme } = useCurrentTheme();

  const container = {
    backgroundColor: theme.colorBottomTab.color,
  };

  return <SafeAreaView style={container}>{children}</SafeAreaView>;
};

export default SaveAreaTheme;
