import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import SpinnerIcon from '../../../assets/SpinerIcon.svg';

const LoaderSpinner = () => {
  // const rotateAnim = useRef(new Animated.Value(0)).current;
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    // Animated.loop(
    //   Animated.timing(rotateAnim, {
    //     toValue: 360,
    //     duration: 500,
    //     useNativeDriver: false,
    //   })
    // ).start();
    setInterval(() => {
      setRotate((prevState) => {
        if (prevState + 1 > 361) {
          return 0;
        }
        return prevState + 5;
      });
    }, 4);
  }, []);

  return (
    <Animated.View
      style={[styles.container, { transform: [{ rotate: `${rotate}deg` }] }]}
    >
      <SpinnerIcon />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    with: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default React.memo(LoaderSpinner);
