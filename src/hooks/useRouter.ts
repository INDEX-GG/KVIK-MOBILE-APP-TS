import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  YourScreen: { id: string };
};

export const useRouter = () => {
  const navigator = useNavigation<StackNavigationProp<RootStackParamList>>();

  const push = (location: string, callback?: () => void) => {
    return () => {
      callback ? callback() : null;
      navigator.navigate(location as never, {} as never);
    };
  };

  const back = () => {
    navigator.goBack();
  };

  return {
    pushTo: push,
    pushBack: back,
  };
};
