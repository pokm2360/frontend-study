import React from 'react';

const Avatar = (props) => {
  console.log(props);
  return (
      <img className="avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        style={{
          width: 100,
          height: 100,
          borderRadius: '50%'
        }}
      />
  );
};

export default Avatar;