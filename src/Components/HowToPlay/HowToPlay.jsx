import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

CustomizedDialogs.propTypes = {
  handleHowToClose: PropTypes.func,
  openHowTo: PropTypes.bool
}


export default function CustomizedDialogs(props) {


  return (
    <React.Fragment>
      
      <BootstrapDialog
        onClose={props.handleHowToClose}
        aria-labelledby="customized-dialog-title"
        open={props.openHowTo}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          How To Play
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={props.handleHowToClose}
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
          Cat ipsum dolor sit amet, peer out window, chatter at birds, lure them to mouth so show belly purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow , meow meow you are my owner so here is a dead bird. Sweet beast sleep on my human head dead stare with ears cocked disappear for four days and return home with an expensive injury; bite the vet pooping rainbow while flying in a toasted bread costume in space but hunt anything. Chew the plant. I is playing on your console hooman pooping rainbow while flying in a toasted bread costume in space so kitty making bread on the bathrobe. Immediately regret falling into bathtub wake up wander around the house making large amounts of noise jump on top of your human bed and fall asleep again yet have my breakfast spaghetti yarn so the cat was chasing the mouse. You call this cat food sit in box. It 3am, time to create some chaos .
          </Typography>
        </DialogContent>
        </BootstrapDialog>
    </React.Fragment>
  );
}









