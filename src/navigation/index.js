import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Chat from '../screens/Chat';
import Friends from '../screens/Friends';
import Login from '../screens/Login';

import {NAV_FRIENDS, NAV_CHAT, NAV_LOGIN, NAV_CHAT_MODAL} from './constants';
const ChatModalNavigator = createStackNavigator(
  {
    [NAV_CHAT]: {
      screen: Chat,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: NAV_CHAT,
  },
);
const ChatStackNavigator = createStackNavigator(
  {
    [NAV_FRIENDS]: {
      screen: Friends,
      navigationOptions: ({navigation}) => ({
        headerTitle: 'Friends',
      }),
    },
    [NAV_CHAT]: {
      screen: Chat,
      navigationOptions: ({navigation}) => {
        const friend = navigation.getParam('friend');
        const friendName = `${friend.firstname} ${friend.lastname}`;
        return {
          headerTitle: friendName,
        };
      },
    },
  },
  {
    headerLayoutPreset: 'center',
    initialRouteName: NAV_FRIENDS,
  },
);

const MainSwitch = createSwitchNavigator({
  [NAV_LOGIN]: Login,
  [NAV_FRIENDS]: ChatStackNavigator,
  [NAV_CHAT_MODAL]: ChatModalNavigator,
});

export default createAppContainer(MainSwitch);
