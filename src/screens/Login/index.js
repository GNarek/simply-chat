import React from 'react';
import {ActivityIndicator} from 'react-native';

import {NAV_FRIENDS} from '../../navigation/constants';
import {Wrapper} from './style';

const Login = props => {
  setTimeout(() => {
    props.navigation.navigate(NAV_FRIENDS);
  }, 2000);

  return (
    <Wrapper>
      <ActivityIndicator />
    </Wrapper>
  );
};

export default Login;
