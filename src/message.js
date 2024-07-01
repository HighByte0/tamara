import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Message({ nbr }) {
  return (
    <Stack sx={{ width: '50%' }} spacing={2}>
      {nbr === 1 && (
        <Alert variant="outlined" severity="error">
          Error
        </Alert>
      )}
      {nbr === 0 && (
        <Alert variant="outlined" severity="success">
          Good
        </Alert>
      )}
    </Stack>
  );
}

export default Message;
