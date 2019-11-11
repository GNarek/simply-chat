import React from 'react';
import {ScrollView} from 'react-native';

import MessageBox from './MessageBox';

const Chat = ({messages}) => {
  // TODO: Replace with FlatList
  return (
    <ScrollView>
      {messages.map(message => {
        return <MessageBox message={message} key={message.id} />;
      })}
    </ScrollView>
  );
};

export default Chat;
