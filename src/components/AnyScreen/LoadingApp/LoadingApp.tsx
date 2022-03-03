import React, { FC } from 'react';
import { View, Modal } from 'react-native';
import { useLoadingAppStyles } from './style';
import LogoKvik from '../../../assets/LogoKVIK.svg';

interface LoadingAppProps {
  isLoading: boolean;
}

const LoadingApp: FC<LoadingAppProps> = ({ isLoading }) => {
  const styles = useLoadingAppStyles();

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

export default LoadingApp;
