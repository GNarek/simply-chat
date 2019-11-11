import React, {useState, useEffect} from 'react';
import {Animated, Dimensions} from 'react-native';

import Emojy from './Emojy';
import {EmojiesWrapper, EmojiesContainer} from '../../style';

const emojies = [
  {
    id: 'e_0',
    text: '😀',
  },
  {
    id: 'e_1',
    text: '😂',
  },
  {
    id: 'e_2',
    text: '😈',
  },
  {
    id: 'e_3',
    text: '😜',
  },
  {
    id: 'e_4',
    text: '😍',
  },
  {
    id: 'e_5',
    text: '🤙',
  },
  {
    id: 'e_6',
    text: '🤟',
  },
  {
    id: 'e_7',
    text: '🤦',
  },
];

const wrapperStyle = {
  width: Dimensions.get('window').width - 50,
  overflow: 'hidden',
};

const Emojies = ({onHide}) => {
  const [animatedHeight] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: 60,
      duration: 200,
    }).start();
  }, [animatedHeight]);

  const handleHide = () => {
    Animated.timing(animatedHeight, {
      toValue: 0,
      duration: 200,
    }).start(onHide);
  };

  return (
    <Animated.View style={[wrapperStyle, {height: animatedHeight}]}>
      <EmojiesContainer>
        <EmojiesWrapper>
          {emojies.map((emojy, index) => {
            return (
              <Emojy
                key={emojy.id}
                emojy={emojy}
                onHide={handleHide}
                index={index}
              />
            );
          })}
        </EmojiesWrapper>
      </EmojiesContainer>
    </Animated.View>
  );
};

export default Emojies;
