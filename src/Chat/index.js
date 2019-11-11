import React, {useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import moment from 'moment';

import ChatMessages from './ChatMessages';
import Pressable from '../components/common/pressable';

import {
  InputWrapper,
  ChatWrapper,
  Input,
  Button,
  ChatBoxContainer,
  Triangle,
} from './style';

const messagesHistory = [
  {
    id: 'id_0',
    userId: 1,
    letters: 'GA',
    text:
      'You can use an operator such as switchMap which per documentation "Maps to observable, complete previous inner observable, emit values". Using switchMap it will switch to the 2nd HttpClient call mapping the first observable, when the source of the first HttpClient calls emits. If a new initial/outer request is executed, it will cancel the in-flight/in-process request.',
    createdAt: moment
      .utc()
      .subtract(12, 'minute')
      .format('x'),
  },
  {
    id: 'id_1',
    userId: 1,
    letters: 'GA',
    text:
      "Keep in mind, the way your alert() statements are set up, they will simply not work as alert() will execute before the requests have completed, hence the undefined. You'd need to execute alert() or similar within subscribe or utilize operators such as do/tap to ensure the data has actually been returned.",
    createdAt: moment
      .utc()
      .subtract(5, 'minute')
      .format('x'),
  },
  {
    id: 'id_2',
    userId: 2,
    letters: 'MN',
    text: 'Thank you! 😍',
    createdAt: moment().format('x'),
  },
];

const Chat = props => {
  const [typedText, setTypedText] = useState('');
  const [messages, setMessages] = useState(messagesHistory);

  const sendMessage = () => {
    if (typedText.length) {
      const index = messages.length;
      const newMessage = {
        id: `id_${index}`,
        userId: index % 2 ? 1 : 2,
        letters: 'GA',
        text: typedText,
        createdAt: moment().format('x'),
      };

      setMessages([...messages, newMessage]);
      setTypedText('');
    }
  };

  return (
    <ChatWrapper>
      <ChatBoxContainer>
        <ChatMessages messages={messages} />
      </ChatBoxContainer>

      <KeyboardAvoidingView behavior="padding" enabled>
        <InputWrapper>
          <Input
            placeholder="Enter a message"
            value={typedText}
            onChangeText={setTypedText}
          />
          <Pressable onPress={sendMessage}>
            <Button>
              <Triangle />
            </Button>
          </Pressable>
        </InputWrapper>
      </KeyboardAvoidingView>
    </ChatWrapper>
  );
};

export default Chat;
