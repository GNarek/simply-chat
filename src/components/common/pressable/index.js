import React from 'react';
import {TouchableOpacity} from 'react-native';

const Pressable = ({children, hitSlop, onPress, style}) => (
  <TouchableOpacity onPress={onPress} hitSlop={hitSlop} style={style}>
    {children}
  </TouchableOpacity>
);

Pressable.defaultProps = {
  hitSlop: {
    top: 10,
    bottom: 10,
    left: 5,
    right: 5,
  },
  style: {},
};

export default React.memo(Pressable);
