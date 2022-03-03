import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAsyncStorage = () => {
  const setItemStorage = async (
    key: string,
    value: any,
    callback?: () => null | undefined
  ) => {
    try {
      await AsyncStorage.setItem(`@${key}`, JSON.stringify(value));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getItemStorage = async (key: string) => {
    try {
      return await AsyncStorage.getItem(`@${key}`);
    } catch (e) {
      console.log(e);
    }
  };

  const removeItemStorage = async (key: string) => {
    try {
      return await AsyncStorage.removeItem(`@${key}`).then();
    } catch (e) {
      console.log(e);
    }
  };

  const getAllKeysStorage = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      return keys;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getAllKeysStorage,
    removeItemStorage,
    setItemStorage,
    getItemStorage,
    AsyncStorage,
  };
};
