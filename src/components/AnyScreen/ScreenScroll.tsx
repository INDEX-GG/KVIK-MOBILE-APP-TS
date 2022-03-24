import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';

interface IScreenScrollProps {
  children: React.ReactChild | React.ReactNode;
}

const ScreenScroll: FC<IScreenScrollProps> = ({ children }) => {
  const { theme } = useCurrentTheme();

  return (
    <ScrollView
      style={{ backgroundColor: theme.screenBackground.backgroundColor }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

export default React.memo(ScreenScroll);
