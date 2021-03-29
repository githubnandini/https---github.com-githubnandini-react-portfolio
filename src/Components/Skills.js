import React from "react";
import ProgressBar from "./progress-bar";
import {Typography } from '@material-ui/core'
import useStyles from './styles'

const testData = [
    { bgcolor: "#3f51b5", completed: '90', label: 'HTML' },
    { bgcolor: "#3f51b5", completed: '70', label: 'CSS' },
    { bgcolor: "#3f51b5", completed: '55', label: 'Javascript' },
    { bgcolor: "#3f51b5", completed: '35', label: 'React Js' },
    { bgcolor: "#3f51b5", completed: '70', label: 'Shopify' },
  ];

  const Skills = () => {
    const classes = useStyles();
    
    return <>
  <div className="App" id = 'skills'>
  <Typography variant = 'h3' align = 'center' className={classes.skillHeading}>Skills</Typography>
  {testData.map((item, idx) => (
  <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} label = {item.label}/>
  ))}
  </div>
  </>
  }

  export default Skills