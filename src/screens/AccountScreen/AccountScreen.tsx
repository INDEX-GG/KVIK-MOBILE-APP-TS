import React, {useCallback, useMemo, useRef} from 'react';
import SaveScrollContainer from '../../UI/SaveScrollContainer';
import RobotoText from '../../UI/RobotoText';
import { AccountScreenStyles } from './style';
import { ImageBackground, View } from 'react-native';
import FillButton from '../../UI/FillButton/FillButton';
import BottomSheet from '@gorhom/bottom-sheet';

const AccountScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const styles = AccountScreenStyles();

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
            onPress={() => console.log(1)}
          />
        </View>
        <ImageBackground
          source={require('../../assets/img/logo.png')}
          resizeMode="cover"
          style={styles.img}
        />
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheet>
      </View>
    </SaveScrollContainer>
  );
};

export default AccountScreen;
