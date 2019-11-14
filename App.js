import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Router from './src/navigation';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Router />
    </>
  );
};

export default App;
