import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import RobotoText from '../../RobotoText';
import FillButton from '../../FillButton/FillButton';
import { BottomSheetAuthStyles } from './style';
import { useRouter } from '../../../hooks/useRouter';
import SocialIcon from '../../../components/AnyScreen/SocialIcon/SocialIcon';

const BottomSheetAuth = () => {
  const styles = BottomSheetAuthStyles();
  const { pushTo } = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.buttonOne}>
        <FillButton
          customButton={styles.buttonOneWrapper}
          title={'Войти'}
          onPress={() => console.log(1)}
        />
      </View>
      <View style={styles.buttonTwo}>
        <FillButton
          customButton={styles.buttonTwoWrapper}
          title={'Зарегистрироваться'}
          onPress={() => console.log(1)}
        />
      </View>
      <View style={styles.iconContainer}>
        <SocialIcon />
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={pushTo('LicenseScreen')}>
        <RobotoText weight="r" style={styles.license}>
          При регистрации вы соглашаетесь с{' '}
          <RobotoText weight="r" style={styles.licenseLink}>
            лицензионным соглашением
          </RobotoText>
        </RobotoText>
      </TouchableOpacity>
    </View>
  );
};

export default BottomSheetAuth;
