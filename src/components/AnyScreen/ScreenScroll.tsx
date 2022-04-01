import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';

interface IScreenScrollProps {
  children: React.ReactChild | React.ReactNode;
  scroll?: boolean;
}

const ScreenScroll: FC<IScreenScrollProps> = ({ scroll = true, children }) => {
  const { theme } = useCurrentTheme();
  const Container = scroll ? ScrollView : View;

  return (
    <Container
      style={{
        backgroundColor: theme.screenBackground.backgroundColor,
        flex: 1,
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </Container>
  );
};

export default React.memo(ScreenScroll);
