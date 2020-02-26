import React from 'react';
import person from '../person.png';

export default function UserCard(props) {
  const { name, role, email } = props.user;
  return (
    <div className='col col-md-6 mt-5'>
      <div className='card' style={{ maxWidth: 540 }}>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img
              src={person}
              className='card-img'
              alt='Employee'
              style={{ width: '75%' }}
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h4 className='card-title'>{name}</h4>
              <h5 className='card-text font-weight-normal'>{role}</h5>
              <p className='card-text'>
                <small className='text-muted'>{email}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
