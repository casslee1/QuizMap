import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

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
            <List>
              <ListItem>
                1. Click on one of the number boxes to select a question.
              </ListItem>
              <ListItem>
                2. Find the location of the answer on the map.
              </ListItem>
              <ListItem>
                3. Click on the answer in the popup box to answer the question. When you have answered the question a picture of the answer will fill in the numbered box and the box will be outlined in green.
              </ListItem>
              <ListItem>
                4. If you are unable to think of the answer, then tap the “I Give Up” button and this will zoom in to the answer on the map. The numbered box will then be filled with a black and white image of the answer and outlined in red.
              </ListItem>
              <ListItem>
                5. Answer or give up on all four questions to complete the game. You may play once per day.
              </ListItem>
            </List>
          </Typography>
        </DialogContent>
        </BootstrapDialog>
    </React.Fragment>
  );
}









