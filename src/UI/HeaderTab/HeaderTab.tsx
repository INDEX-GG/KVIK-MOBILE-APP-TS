import React, { FC, useMemo } from 'react';
import { View, Pressable } from 'react-native';
import RobotoText from '../RobotoText';
import ArrowBack from '../../assets/ArrowLeft.svg';
import { HeaderTabStyles } from './styles';
import { useRouter } from '../../hooks/useRouter';
import { HeaderTabProps } from './types';
import SaveAreaTheme from '../SaveAreaTheme/SaveAreaTheme';

const HeaderTab: FC<HeaderTabProps> = ({
  title,
  arrow = true,
  resultKey,
  dynamicFunction,
}) => {
  const styles = HeaderTabStyles();
  const { pushBack } = useRouter();
  const resultFunc = dynamicFunction ? dynamicFunction() : undefined;
  const tabTitle = useMemo(() => {
    if (resultFunc && resultKey) {
      return resultFunc[resultKey];
    }
    return title;
  }, [resultFunc, title, resultKey]);

  return (
    <SaveAreaTheme>
      <View style={styles.container}>
        {arrow && (
          <Pressable style={styles.back} onPress={pushBack}>
            <View style={styles.icon}>
              <ArrowBack />
            </View>
          </Pressable>
        )}
        <RobotoText weight="b" style={styles.title}>
          {tabTitle}
        </RobotoText>
      </View>
    </SaveAreaTheme>
  );
};

export default HeaderTab;
