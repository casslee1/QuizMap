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
import { Divider } from '@mui/material';
//import MediaQuery from 'react-responsive'
import GuessDistribution from '../GuessDistribution/GuessDistribution';

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
  averageScore: PropTypes.string,
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
        <DialogTitle sx={{ m: 0, paddingTop: 2, paddingBottom: 2, paddingLeft: 2, paddingRight: 6 }} id="customized-dialog-title">
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
          <Typography gutterBottom  sx={{marginBottom: 2}}>
           Average Score: {props.averageScore}
          </Typography>
          <Divider />
          <Typography gutterBottom sx={{marginTop: 2, fontWeight: 500}}>
           Guess Distribution:
          </Typography>
          <GuessDistribution daysOfZeroScore={props.daysOfZeroScore}
            daysOfOneScore={props.daysOfOneScore}
            daysOfTwoScore={props.daysOfTwoScore}
            daysOfThreeScore={props.daysOfThreeScore}
            daysOfFourScore={props.daysOfFourScore}
            timesPlayed={props.results.length}/>
          </DialogContent>
        </BootstrapDialog>
    </React.Fragment>
  );
}

/* <Typography gutterBottom>
           0 {props.daysOfZeroScore}
          </Typography>
          <Typography gutterBottom>
           1 {props.daysOfOneScore}
          </Typography>
          <Typography gutterBottom>
           2 {props.daysOfTwoScore}
          </Typography>
          <Typography gutterBottom>
           3 {props.daysOfThreeScore}
          </Typography>
          <Typography gutterBottom>
           4 {props.daysOfFourScore}
          </Typography>*/