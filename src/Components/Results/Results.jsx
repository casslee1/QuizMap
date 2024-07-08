import * as React from 'react';
//import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
   const [open, setOpen] = React.useState(true);

    /*const handleClickOpen = () => {
    setOpen(true);
  };*/
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Game Statistics
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
           Todays Score:
          </Typography>
          <Typography gutterBottom>
            Average Score:
          </Typography>
          <Typography gutterBottom>
           Streak:
          </Typography>
        </DialogContent>
        </BootstrapDialog>
    </React.Fragment>
  );
}


/*<Button variant="outlined" onClick={handleClickOpen}>
        Stats
      </Button>*/