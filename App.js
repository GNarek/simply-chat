import React from 'react';
import {StatusBar} from 'react-native';
import Chat from './src/Chat';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Chat />
    </>
  );
};

export default App;
