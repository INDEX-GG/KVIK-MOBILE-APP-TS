import React, { FC } from 'react';
import { View, Modal } from 'react-native';
import { useLoadingAppStyles } from './style';
import LogoKvik from '../../../assets/LogoKVIK.svg';
import { useUserStore } from '../../../hooks/useReducerHook/useUserStore';

const LoadingApp: FC = () => {
  const styles = useLoadingAppStyles();

  const { isLoading } = useUserStore();

  return (
    <Modal visible={isLoading} animationType="fade">
      <View style={styles.container}>
        <View style={styles.logo}>
          <LogoKvik style={styles.icon as {}} />
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(LoadingApp);
