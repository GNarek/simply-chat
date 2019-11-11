import React, {useState} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';

import OwnMessageBox from './OwnMessageBox';
import OthersMessageBox from './OthersMessageBox';
import Emojies from './Emojies';

const MessageBox = ({message}) => {
  const [isEmojiesVisiable, setIsEmojiesVisiable] = useState(false);

  const hideEmojies = () => {
    setIsEmojiesVisiable(false);
  };

  const _handleOnPress = () => {
    if (!isEmojiesVisiable) {
      setIsEmojiesVisiable(true);
    }
  };

  const renderMessageBox = () => {
    if (message.userId === 2) {
      return <OwnMessageBox message={message} />;
    }

    return <OthersMessageBox message={message} />;
  };

  return (
    <TouchableWithoutFeedback key={message.id} onPress={_handleOnPress}>
      <View>
        {renderMessageBox(message)}
        {isEmojiesVisiable ? <Emojies onHide={hideEmojies} /> : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MessageBox;
