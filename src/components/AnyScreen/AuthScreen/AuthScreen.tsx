import React from 'react';
import SaveScrollContainer from '../../../UI/SaveScrollContainer';
import RobotoText from '../../../UI/RobotoText';
import { useAuthScreenStyles } from './style';
import { ImageBackground, View } from 'react-native';
import FillButton from '../../../UI/FillButton/FillButton';
import { useBottomSheet } from '../../../hooks/useReducerHook/useBottomSheet';

const AccountScreen = () => {
  const styles = useAuthScreenStyles();
  const { handleOpenBottomSheet } = useBottomSheet();

  return (
    <SaveScrollContainer paddingDisabled={true} scrollContent={false}>
      <View style={styles.container}>
        <RobotoText weight="m" style={styles.title}>
          Для пользования всеми функциями сервиса {'\n'} Kvik, необходимо войти
          или зарегистрироваться
        </RobotoText>
        <FillButton
          title={'Войти или зарегистрироваться'}
          onPress={handleOpenBottomSheet(0)}
        />
      </View>
      <View style={styles.imgContainer}>
        <ImageBackground
          source={require('../../../assets/img/logo.png')}
          resizeMode="cover"
          style={styles.img}
        />
      </View>
    </SaveScrollContainer>
  );
};

export default React.memo(AccountScreen);
