import PropTypes from 'prop-types';
import { List, Iteam, Status, Avatar, TextName } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Iteam key={id}>
          <Status isOnline={isOnline}></Status>
          <Avatar src={avatar} alt="{name}" width="80" />
          <TextName>{name}</TextName>
        </Iteam>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
