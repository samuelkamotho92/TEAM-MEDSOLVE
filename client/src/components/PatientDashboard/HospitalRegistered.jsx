import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id,hostpitalName,location,phoneNumber,view) {
  return {id,hostpitalName,location,phoneNumber,view};
}

const rows = [
  createData(
    0,
    'Pumwani Hospital',
    'nairobi',
    '0700856037',
    'view',
  )
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Hospital Registered</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Hospital Name</TableCell>
            <TableCell>location</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>View </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.hostpitalName}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.view}</TableCell>
            </TableRow>
          ))}
        </TableBody>x
      </Table>
    </React.Fragment>
  );
}