import React, { FC } from 'react';
import SaveScrollContainer from '../../../UI/SaveScrollContainer';
import CustomInput from '../../../UI/Inputs/CustomInput/CustomInput';
import { ScrollView, View } from 'react-native';
import { useSignInScreenStyles } from './style';
import RobotoText from '../../../UI/RobotoText';
import FillButton from '../../../UI/FillButton/FillButton';
import PasswordIcon from '../../../assets/EyePassword.svg';
import { PhoneMask } from '../../../services/services';
import { Control } from 'react-hook-form';

interface SignInScreenViewProps {
  passwordData: {
    viewPassword: boolean;
    setViewPassword: () => void;
  };
  formData: {
    control: Control;
    handlePressButton: () => void;
  };
  activeButton: boolean;
}

const SignInScreenView: FC<SignInScreenViewProps> = ({
  passwordData,
  formData,
  activeButton,
}) => {
  const styles = useSignInScreenStyles();
  const { viewPassword, setViewPassword } = passwordData;
  const { handlePressButton, control } = formData;

  return (
    <SaveScrollContainer>
      <View style={styles.container}>
        <View style={styles.inputOne}>
          <CustomInput
            autoFocus={true}
            maxLength={19}
            keyboardType="numeric"
            name="phone"
            control={control}
            placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _ "
            customChange={PhoneMask}
          />
        </View>
        <ScrollView style={styles.inputTwo} keyboardShouldPersistTaps="always">
          <CustomInput
            passwordInput={viewPassword}
            name="password"
            control={control}
            placeholder="Пароль"
            inputIcon={PasswordIcon}
            onPressIcon={setViewPassword}
            styleIcon={styles.passwordIcon as {}}
          />
        </ScrollView>
        <View style={styles.textContainer}>
          <RobotoText weight="m" style={styles.resetLink}>
            Забыли пароль?
          </RobotoText>
        </View>
        <FillButton
          disabled={!activeButton}
          title={'Войти'}
          onPress={handlePressButton}
        />
      </View>
    </SaveScrollContainer>
  );
};

export default React.memo(SignInScreenView);
