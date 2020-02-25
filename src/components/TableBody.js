import React from 'react';
import { assignRandomDepartment, assignRole } from '../utils';
import User from './User';

export default function TableBody({ filteredUsers }) {
  return (
    <React.Fragment>
      <tbody>
        {filteredUsers.map(user => {
          if (!user.department && !user.role) {
            user.department = assignRandomDepartment();
            user.role = assignRole(user.department);
          }
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
