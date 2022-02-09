import React from 'react';
import SaveScrollContainer from '../../../UI/SaveScrollContainer';
import NavigationSection from '../../../UI/NavigationSection/NavigationSection';
import { View } from 'react-native';
import RobotoText from '../../../UI/RobotoText';
import {SettingsScreenStyles} from "./style";

const SettingsScreen = () => {

  const styles = SettingsScreenStyles();

  return (
    <View>
      <SaveScrollContainer lightColor="#f4f4f4" paddingDisabled={true}>
        <View style={styles.container}>
          <NavigationSection title={'Челябинск'} pushName="LocationSearch" />
          <NavigationSection
            title={'Push-уведомления'}
            pushName={'NotificationScreen'}
          />
          <NavigationSection
            title={'Очистить историю поисков'}
            pushName={'ClearSearchResultScreen'}
          />
        </View>
        <View style={styles.docWrapper}>
          <RobotoText weight="b" style={styles.docTitle}>
            Документация
          </RobotoText>
          <NavigationSection
            title={'Лицензионное соглашение'}
            pushName={'LicenseScreen'}
            customContainer={styles.docItem}
          />
          <NavigationSection
            title={'Политика конфиденциальности'}
            pushName={'PrivacyPolicyScreen'}
            customContainer={styles.docItem}
          />
          <NavigationSection
            title={'Условия использования Kvik'}
            pushName={'KvikUseScreen'}
            customContainer={styles.docItem}
          />
          <NavigationSection
            title={'Оферта на использование услуг'}
            pushName={'OfferUseScreen'}
            customContainer={styles.docItem}
          />
        </View>
      </SaveScrollContainer>
    </View>
  );
};

export default React.memo(SettingsScreen);
