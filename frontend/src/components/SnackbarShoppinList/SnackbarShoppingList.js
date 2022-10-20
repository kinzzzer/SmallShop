import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function SnackbarShoppingList() {
  const [isOpen, setIsOpen] = React.useState();

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>

      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={setIsOpen}>Open simple snackbar</Button>
      <Snackbar
        open={setIsOpen(isOpen)}
        autoHideDuration={6000}
        onClose={setIsOpen(false)}
        message='Add in shoppin List'
        action={action}
      />
    </div>
  );
}
