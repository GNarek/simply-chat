import React from 'react';

import {Wrapper} from './style';
import {friends} from '../../mocked-data';
import Friend from './Friend';

const Friends = ({navigation}) => {
  return (
    <Wrapper>
      {friends.map(friend => {
        return (
          <Friend key={friend.id} friend={friend} navigation={navigation} />
        );
      })}
    </Wrapper>
  );
};

export default React.memo(Friends);
