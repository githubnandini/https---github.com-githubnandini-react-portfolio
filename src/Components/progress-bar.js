import React from 'react'
import {Grid, Typography } from '@material-ui/core'
import useStyles from './styles'

const ProgressBar = (props) => {
  const classes = useStyles();

const { bgcolor, completed, label } = props;

  const containerStyles = {
    height: 35,
    width: '100%',
    backgroundColor: "transparent",
    borderRadius: 0,
    margin: '10px auto'
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'left'
  }

  const labelStyles = {
    padding: '5px 10px 5px 20px',
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <Grid item xs={12} sm = {7} className={classes.Container} >
    <div style={containerStyles}>
      <div className={classes.bar} style={fillerStyles}>
      <Typography ><span style={labelStyles}>{`${label}`}</span></Typography>
      </div>
    </div>
    </Grid>
  );
};

export default ProgressBar;