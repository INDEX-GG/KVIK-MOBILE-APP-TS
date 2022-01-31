import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useTypeSelector} from '../hooks/useTypedSelector';
import {Button} from 'react-native-elements';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Main: {userId: string};
  Details: {sort: 'latest' | 'top'} | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

const TestComp: FC<Props> = ({navigation, route}) => {
  // const dispatch = useDispatch();
  const test = useTypeSelector(state => state.testReduce);

  const handlePress = () => {
    // dispatch({type: SortTypes.CHANGE_INC, payload: {value: test.value}});
    // console.log(test.value);
    navigation.navigate('Details');
  };

  return (
    <View>
      <Text>counter {test.value}</Text>
      <Button title={'+1'} onPress={handlePress} />
      <Button title={'+1'} onPress={handlePress} />
      <Button title={'+1'} onPress={handlePress} />
      <Button title={'+1'} onPress={handlePress} />
    </View>
  );
};

export default TestComp;
