import React, {useCallback} from 'react';
import {NavigationActions} from 'react-navigation';

import {NAV_CHAT, NAV_CHAT_MODAL} from '../../navigation/constants';
import {FriendWrapper, FriendImage, FriendName} from './style';

const Friends = ({friend, navigation}) => {
  const navigateToStackChat = useCallback(() => {
    navigation.navigate(NAV_CHAT, {friend});
  }, [navigation, friend]);

  const navigateToModalChat = useCallback(() => {
    navigation.navigate(
      NAV_CHAT_MODAL,
      {},
      NavigationActions.navigate({routeName: NAV_CHAT, params: {friend}}),
    );
  }, [navigation, friend]);

  return (
    <FriendWrapper
      onPress={navigateToStackChat}
      onLongPress={navigateToModalChat}>
      <FriendImage source={friend.image} />
      <FriendName>
        {friend.firstname} {friend.lastname}
      </FriendName>
    </FriendWrapper>
  );
};

export default React.memo(Friends);
