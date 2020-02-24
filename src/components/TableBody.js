import React from 'react';

export default function TableBody() {
  const users = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031',
      department: 'Engineering'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      phone: '010-692-6593',
      department: 'Sales'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      phone: '1-463-123-4447',
      department: 'Marketing'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      phone: '493-170-9623',
      department: 'Accounting'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      phone: '(254)954-1289',
      department: 'Design'
    }
  ];

  return (
    <React.Fragment>
      <tbody>
        {users.map(user => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.department}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </React.Fragment>
  );
}
