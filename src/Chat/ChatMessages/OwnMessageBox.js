import React from 'react';
import {timeAgo} from '../utils';

import {
  MessageWrapper,
  MessageBoxWrapper,
  MessageText,
  AvatarWrapper,
  MessageBoxContainer,
  DateText,
} from '../style';

const wrapperStyle = {
  alignSelf: 'flex-end',
};

const OwnMessageBox = ({message}) => {
  return (
    <MessageWrapper style={wrapperStyle}>
      <AvatarWrapper />
      <MessageBoxWrapper>
        <MessageBoxContainer isOwn>
          <MessageText isOwn>{message.text}</MessageText>
        </MessageBoxContainer>
        <DateText isOwn>{timeAgo(message.createdAt, 'x')}</DateText>
      </MessageBoxWrapper>
    </MessageWrapper>
  );
};

export default OwnMessageBox;
