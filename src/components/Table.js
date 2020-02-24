import React from 'react';
import TableBody from './TableBody';

export default function Table() {
  return (
    <div className='datatable mt-5'>
      <table id='table' className='table table-hover table-condensed'>
        <thead>
          <tr>
            <th scope='col' style={{ width: '35%' }}>
              Name
            </th>
            <th scope='col' style={{ width: '20%', color: '#666' }}>
              Department
            </th>
            <th scope='col' style={{ width: '22.5%', color: '#666' }}>
              Email
            </th>
            <th scope='col' style={{ width: '22.5%', color: '#666' }}>
              Phone
            </th>
          </tr>
        </thead>
        <TableBody />
      </table>
    </div>
  );
}
