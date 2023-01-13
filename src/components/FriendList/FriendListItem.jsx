import PropTypes from 'prop-types';
import { Status, Avatar, TextName, Item } from './FriendList.styled';

export const FriendItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="{name}" width="80" />
      <TextName>{name}</TextName>
    </Item>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
