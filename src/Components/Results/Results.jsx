import * as React from 'react';
//import Button from '@mui/material/Button';
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
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  results: PropTypes.array,
  todaysScore: PropTypes.number,
  averageScore: PropTypes.number,
  daysOfZeroScore: PropTypes.number,
  daysOfOneScore: PropTypes.number,
  daysOfTwoScore: PropTypes.number,
  daysOfThreeScore: PropTypes.number,
  daysOfFourScore: PropTypes.number
}


export default function CustomizedDialogs(props) {


  return (
    <React.Fragment>
      
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Game Statistics
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={props.handleClose}
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
           Todays Score: {props.todaysScore}
          </Typography>
          <Typography gutterBottom>
           Times Played: {props.results.length}
          </Typography>
          <Typography gutterBottom>
           Average Score: {props.averageScore}
          </Typography>
          <Typography gutterBottom>
           Guess Distribution:
          </Typography>
          <Typography gutterBottom>
           0 correct: {props.daysOfZeroScore}
          </Typography>
          <Typography gutterBottom>
           1 correct: {props.daysOfOneScore}
          </Typography>
          <Typography gutterBottom>
           2 correct: {props.daysOfTwoScore}
          </Typography>
          <Typography gutterBottom>
           3 correct: {props.daysOfThreeScore}
          </Typography>
          <Typography gutterBottom>
           4 correct: {props.daysOfFourScore}
          </Typography>
        </DialogContent>
        </BootstrapDialog>
    </React.Fragment>
  );
}

