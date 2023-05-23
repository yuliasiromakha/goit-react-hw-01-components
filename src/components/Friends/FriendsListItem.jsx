import PropTypes from 'prop-types';
import './Friends.css'

const FriendListItem = ({ avatar, name, isOnline }) => {

    return (
      <li className="item-friends">
        <span
          className="status"
          style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        ></span>
        <img className="avatar friends" src={avatar} alt="User avatar" width="48" />
        <p className="name friends">{name}</p>
      </li>
    );
  };
  
  FriendListItem.propTypes = {
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    };

export default FriendListItem;