import React from 'react';
import SaveScrollContainer from '../../UI/SaveScrollContainer';
import RobotoText from '../../UI/RobotoText';
import { AccountScreenStyles } from './style';
import { ImageBackground, View } from 'react-native';
import FillButton from '../../UI/FillButton/FillButton';
import { useBottomSheet } from '../../hooks/useReducerHook/useBottomSheet';
import BottomSheetAuth from '../../UI/BottomSheetCustom/BottomSheetAuth/BottomSheetAuth'

const AccountScreen = () => {
  const styles = AccountScreenStyles();
  const { handleOpenBottomSheet } = useBottomSheet();

  return (
    <SaveScrollContainer paddingDisabled={true}>
      <View>
        <View style={styles.container}>
          <RobotoText weight="m" style={styles.title}>
            Для пользования всеми функциями сервиса {'\n'} Kvik, необходимо
            войти или зарегистрироваться
          </RobotoText>
          <FillButton
            title={'Войти или зарегистрироваться'}
            onPress={handleOpenBottomSheet(BottomSheetAuth, 220)}
          />
        </View>
        <ImageBackground
          source={require('../../assets/img/logo.png')}
          resizeMode="cover"
          style={styles.img}
        />
        {/*<BottomSheet*/}
        {/*  ref={bottomSheetRef}*/}
        {/*  index={1}*/}
        {/*  snapPoints={snapPoints}*/}
        {/*  onChange={handleSheetChanges}*/}
        {/*  detached*/}
        {/*>*/}
        {/*  <View>*/}
        {/*    <RobotoText weight="b">Awesome 🎉</RobotoText>*/}
        {/*  </View>*/}
        {/*</BottomSheet>*/}
      </View>
    </SaveScrollContainer>
  );
};

export default React.memo(AccountScreen);
