import React from 'react';
import UserCard from './UserCard';

export default function Grid(props) {
  return (
    <div className='container'>
      <div className='row'>
        {props.users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
