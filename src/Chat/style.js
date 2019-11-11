import styled from 'styled-components/native';

export const colors = {
  white: '#f5f5f5',
  black: '#000',
  lightGrey: '#464646',
  screenBackground: '#151516',
  indicatorGreen: '#2CE42C',
  indicatorYellow: '#F8D800',
  indicatorRed: '#DD2C2C',
  indicatorGrey: '#838488',
  modalBackground: '#2F3B52',
  statusBar: '#2F3B52',
  navBarBorder: '#838488',
  modalButton: '#3399FF',
  bottomNavBackground: '#1d1f28',
  cockpitBackground: '#1d1f28',
  cardBackground: '#222222',
  cardBorder: '#282e3a',
  trendItemSideBorder: '#4b4a4a',
  trendItemContainerBorder: '#3c475d',
  trendItemBackground: '#303b50',
  trendContainerBackground: '#212121',
  trendContainerBorder: '#414c62',
  alarmBackground: '#631e20',
  darkTransparent: 'rgba(21, 21, 22, .8)',
  waveFormChartColor: '#D42B2A',
  sectionBorder: '#3f4c64',
  sectionTitle: '#b7b7b7',
  blueLink: '#8ec6ff',
  alarmsBackground: '#333333',
};

export const ChatWrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  padding-top: 40;
  background: ${colors.screenBackground};
`;

export const ChatBoxContainer = styled.View`
  flex: 1;
  padding-horizontal: 20;
`;

export const InputWrapper = styled.View`
  background-color: ${colors.cardBackground};
  padding-vertical: 20;
  padding-horizontal: 10;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  background-color: ${colors.white};
  padding-vertical: 10;
  padding-horizontal: 10;
  flex: 1;
  margin-right: 10;
`;

export const Button = styled.View`
  width: 30;
  height: 30;
  border-color: ${colors.trendContainerBorder};
  border-width: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3;
`;

export const Triangle = styled.View`
  width: 0;
  height: 0;
  background-color: transparent;
  border-left-width: 4;
  border-right-width: 4;
  border-bottom-width: 7;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: ${colors.navBarBorder};
  transform: rotate(90deg);
`;

export const MessageWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10;
  width: 80%;
`;

export const AvatarWrapper = styled.View`
  width: 50;
`;

export const MessageBoxWrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const MessageBoxContainer = styled.View`
  border-width: 1;
  border-color: ${({isOwn}) =>
    isOwn ? colors.trendItemContainerBorder : colors.trendItemContainerBorder};
  border-radius: 10;
  background-color: ${({isOwn}) =>
    isOwn ? colors.trendItemBackground : colors.white};
  padding-horizontal: 10};
  padding-vertical: 10;
`;

export const MessageText = styled.Text`
  color: ${({isOwn}) => (isOwn ? colors.white : colors.trendItemBackground)};
`;

export const DateText = styled.Text`
  color: ${colors.white};
  text-align: ${({isOwn}) => (isOwn ? 'right' : 'left')};
`;

export const AvatarText = styled.Text`
  font-size: 14;
  color: ${colors.white};
  font-weight: bold;
`;

export const Circle = styled.View`
  width: ${({size}) => size};
  height: ${({size}) => size};
  border-radius: ${({size}) => size};
  background: ${({color}) => color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmojiesContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-left: 50;
  z-index: 100;
  elevation: 100;
`;

export const EmojiesWrapper = styled.View`
  flex-direction: row;
  border-radius: 30;
  background: ${colors.trendItemSideBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 5;
  padding-horizontal: 10;
  width: 100%;
`;

export const EmojyWrapper = styled.TouchableWithoutFeedback``;

export const EmojyItem = styled.Text`
  font-size: 32;
`;
