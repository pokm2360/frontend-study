import React from 'react';
import Avatar from './Avatar';

const UserInfo = (props) => {
  return (
    <div>
      <div className="user-info">
          <Avatar 
            user={props.user}
          />
          <div className="user-info-name">
            {props.user.name}
          </div>
        </div>
    </div>
  );
};

export default UserInfo;