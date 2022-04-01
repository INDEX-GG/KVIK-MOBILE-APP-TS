import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import RobotoText from '../../RobotoText';
import FillButton from '../../FillButton/FillButton';
import { BottomSheetAuthStyles } from './style';
import { useRouter } from '../../../hooks/useRouter';
import SocialIcon from '../../../components/AnyScreen/SocialIcon/SocialIcon';
import { useBottomSheetStore } from '../../../hooks/useReducerHook/useBottomSheetStore';

const BottomSheetAuth = () => {
  const { handleCloseBottomSheet } = useBottomSheetStore();
  const styles = BottomSheetAuthStyles();
  const { pushTo } = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.buttonOne}>
        <FillButton
          customButton={styles.buttonOneWrapper}
          title={'Войти'}
          onPress={pushTo('SignInScreen', handleCloseBottomSheet)}
        />
      </View>
      <View style={styles.buttonTwo}>
        <FillButton
          customButton={styles.buttonTwoWrapper}
          title={'Зарегистрироваться'}
          onPress={pushTo('RegistrationScreen', handleCloseBottomSheet)}
        />
      </View>
      <View style={styles.iconContainer}>
        <SocialIcon />
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={pushTo('LicenseScreen', handleCloseBottomSheet)}
      >
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
