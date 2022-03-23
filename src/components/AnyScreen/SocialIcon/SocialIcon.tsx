import React from 'react';
import VkLogo from '../../../assets/VkLogo.svg';
import OdnoklasLogo from '../../../assets/OdnoklasLogo.svg';
import FacebookLogo from '../../../assets/FacebookLogo.svg';
import GoogleLogo from '../../../assets/GoogleLogo.svg';
import AppleLogo from '../../../assets/AppleLogo.svg';
import { View } from 'react-native';
import { SocialIconStyles } from './styles';

const SocialIcon = () => {
  const styles = SocialIconStyles();

  return (
    <View style={styles.iconContainer}>
      <VkLogo style={styles.icon} />
      <OdnoklasLogo style={styles.icon} />
      <FacebookLogo style={styles.icon} />
      <GoogleLogo style={styles.icon} />
      <AppleLogo style={[styles.icon, styles.lastIcon]} />
    </View>
  );
};

export default React.memo(SocialIcon);
