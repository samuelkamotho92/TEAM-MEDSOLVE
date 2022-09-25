import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const currentdate = new Date().toLocaleDateString()


export default function Registered() {
  return (
    <React.Fragment>
      <Title>Current Registered Hospitals</Title>
      <Typography component="p" variant="h4">
        2000
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {currentdate}
      </Typography>
      <div>
      </div>
    </React.Fragment>
  );
}