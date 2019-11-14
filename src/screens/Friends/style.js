import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  flex: 1;
  padding-horizontal: 8;
  padding-vertical: 8;
`;

export const FriendWrapper = styled.TouchableOpacity`
  background-color: #088;
  padding-vertical: 16;
  padding-horizontal: 8;
  margin-bottom: 8;
  flex-direction: row;
  align-items: center;
`;

export const FriendImage = styled.Image`
  width: 100;
  height: 100;
  border-radius: 50;
  margin-right: 16;
`;

export const FriendName = styled.Text`
  color: white;
  font-size: 22;
`;
