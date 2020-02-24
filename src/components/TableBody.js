import React, { useState, useEffect } from 'react';
import { getUsers, assignRandomDepartment, assignRole } from '../utils';
import User from './User';

export default function TableBody() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(users => {
      setUsers(users);
    });
  }, []);

  return (
    <React.Fragment>
      <tbody>
        {users.map(user => {
          user.department = assignRandomDepartment();
          user.role = assignRole(user.department);
          return (
            <tr key={user.id}>
              <User user={user} />
            </tr>
          );
        })}
      </tbody>
    </React.Fragment>
  );
}
