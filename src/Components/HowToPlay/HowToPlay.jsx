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

CustomizedDialogs.defaultProps = {
  openHowTo: false
}

export default function CustomizedDialogs(props) {


  return (
    <React.Fragment>
      
      <BootstrapDialog
        onClose={props.handleHowToClose}
        aria-labelledby="customized-dialog-title"
        open={props.openHowTo} // default false
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
            1. Click on one of the numbered boxes to select a question.
          </Typography>
          <Typography gutterBottom>
            2. Find the location of the answer on the map. The answer marker will only appear if you are zoomed in. When you are zoomed in enough to see the marker, the map will be outlined in green and and the text above the map will say: Marker is visible! 
          </Typography>
          <Typography gutterBottom>
            3. Click on the marker and then the answer in the popup box to answer the question. When you have answered the question a picture of the answer will fill in the numbered box and the box will be outlined in green.
          </Typography>
          <Typography gutterBottom>
            4. If you are unable to find the answer, tap the “I Give Up” button and this will zoom in to the answer on the map. The numbered box will then be filled with a black and white image of the answer and outlined in red.
          </Typography>
          <Typography gutterBottom>
            5. Answer or give up on all four questions to complete the game. You may play once per day.
          </Typography>
        </DialogContent>
        </BootstrapDialog>
    </React.Fragment>
  );
}









