import React, {useState, useEffect, useCallback} from 'react';
import {Animated, Easing} from 'react-native';

import {EmojyWrapper, EmojyItem} from '../../style';

const Emojy = ({emojy, onHide, index}) => {
  const [animatedTop] = useState(new Animated.Value(-100));
  const [animatedRotation] = useState(new Animated.Value(0));

  const rotationEffect = useCallback(() => {
    Animated.timing(animatedRotation, {
      toValue: 1,
      duration: 200,
      easing: Easing.ease,
    }).start();
  }, [animatedRotation]);

  useEffect(() => {
    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 200,
      delay: index * 100,
    }).start(rotationEffect);
  }, [animatedTop, index, rotationEffect]);

  const spin = animatedRotation.interpolate({
    inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
    outputRange: ['0deg', '-30deg', '30deg', '-15deg', '15deg', '0deg'],
  });

  const _handleOnPress = () => {
    Animated.timing(animatedTop, {
      toValue: -50,
      duration: 300,
    }).start(onHide);
  };

  return (
    <Animated.View
      style={{transform: [{rotate: spin}, {translateY: animatedTop}]}}>
      <EmojyWrapper key={emojy.id} onPress={_handleOnPress}>
        <EmojyItem>{emojy.text}</EmojyItem>
      </EmojyWrapper>
    </Animated.View>
  );
};

export default Emojy;
