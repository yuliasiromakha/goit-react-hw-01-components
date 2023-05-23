import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className='stats-item'>
          <span className="label-profile">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className='stats-item'>
          <span className="label-profile">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className='stats-item'>
          <span className="label-profile">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
