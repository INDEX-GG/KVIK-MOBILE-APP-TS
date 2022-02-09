import React from 'react';
import { View, Pressable } from 'react-native';
import RobotoText from '../../../UI/RobotoText';
import { HeaderProfileStyles } from './styles';
import DarkTheme from '../../../assets/DarkTheme.svg';
import LightTheme from '../../../assets/LightTheme.svg';
import SettingsProfile from '../../../assets/SettingProfile.svg';
import { useCurrentTheme } from '../../../hooks/useTheme';
import { useRouter } from '../../../hooks/useRouter';

const HeaderProfile = () => {
  const styles = HeaderProfileStyles();
  const { isDark, toggleTheme } = useCurrentTheme();
  const { pushTo } = useRouter();

  return (
    <View style={styles.container}>
      <RobotoText weight="m" style={styles.title}>
        Мой профиль
      </RobotoText>
      <View style={styles.iconContainer}>
        <Pressable style={styles.themeIcon} onPress={toggleTheme}>
          {isDark ? <LightTheme /> : <DarkTheme />}
        </Pressable>
        <Pressable onPress={pushTo('Settings')}>
          <SettingsProfile />
        </Pressable>
      </View>
    </View>
  );
};

export default React.memo(HeaderProfile);
