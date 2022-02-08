import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  YourScreen: { id: string };
};

export const useRouter = () => {
  const navigator = useNavigation<StackNavigationProp<RootStackParamList>>();

  const push = (location: string) => {
    navigator.navigate(location as never, {} as never);
  };

  return {
    pushTo: push,
  };
};
