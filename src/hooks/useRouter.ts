import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRoute as useNavigationRouter } from '@react-navigation/native';

export type RootStackParamList = {
  YourScreen: { id: string };
};

export const useRouter = () => {
  const router = useNavigationRouter();
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
    router,
    navigator,
    pushTo: push,
    pushBack: back,
  };
};
