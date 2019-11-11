import React from 'react';

import {timeAgo} from '../utils';
import {
  MessageWrapper,
  Circle,
  AvatarText,
  MessageBoxWrapper,
  MessageText,
  AvatarWrapper,
  MessageBoxContainer,
  DateText,
} from '../style';

const OthersMessageBox = ({message}) => {
  return (
    <MessageWrapper>
      <AvatarWrapper>
        <Circle size={35} color={'#05a'}>
          <AvatarText>{message.letters}</AvatarText>
        </Circle>
      </AvatarWrapper>
      <MessageBoxWrapper>
        <MessageBoxContainer>
          <MessageText>{message.text}</MessageText>
        </MessageBoxContainer>
        <DateText>{timeAgo(message.createdAt, 'x')}</DateText>
      </MessageBoxWrapper>
    </MessageWrapper>
  );
};

export default React.memo(OthersMessageBox);
