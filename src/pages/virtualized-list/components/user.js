import React from "react";

const User = ({ user: { name, email, avatar }}) => {
  return (
    <div className="user">
      <div className="avatar">
        <img src={avatar} />
      </div>
      <div className="user-details">
        <span>{name}</span>
        &nbsp;&#45;&nbsp;
        <span>{email}</span>
      </div>
    </div>
  );
};

export default User;
