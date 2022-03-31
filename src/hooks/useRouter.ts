import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppLocation } from '../types/types';

export type RootStackParamList = {
  YourScreen: { id: string };
};

export const useRouter = () => {
  const navigator = useNavigation<StackNavigationProp<RootStackParamList>>();

  const push = (location: AppLocation, callback?: () => void) => {
    return () => {
      callback ? callback() : null;
      navigator.navigate(location as never, {} as never);
    };
  };

  const back = () => {
    navigator.goBack();
  };

  return {
    navigator,
    pushTo: push,
    pushBack: back,
  };
};
