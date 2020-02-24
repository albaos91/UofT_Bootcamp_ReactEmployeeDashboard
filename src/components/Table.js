import React from 'react';
import TableBody from './TableBody';

export default function Table() {
  return (
    <div className='datatable mt-5'>
      <table
        id='table'
        className='table table-striped table-hover table-condensed'
      >
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Department</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
          </tr>
        </thead>

        <TableBody />
      </table>
    </div>
  );
}
