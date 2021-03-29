import React,{useState} from "react";
import {Typography, TextField,Button,Grid, Snackbar, IconButton   } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles'
import emailjs from 'emailjs-com';


const Contact = () =>{
    const classes = useStyles();
    
    const [open, setOpen] = React.useState(false);
    const [formMessage, setformmessage] = React.useState('');
    const [inputValues, setInputValues] = useState({
      name : '',
      email : '',
      message : ''
    });
    const [errors, setErrors] = useState({
      name: '',
      email: '',
      message: ''
    });
    
    const handleInputChange = (event) =>{
      setInputValues({...inputValues,[event.target.name]: event.target.value})
      setErrors({...errors,[event.target.name]: ''})
    }
    // Error message for unfilled fields
    const handleErrors = () => {
      let formIsValid = true;
      const { name, email, message } = inputValues;
      if (name === "" || name.trim() === "") {
        setErrors((prev) => ({
          ...prev,
          name: "Please provide a name"
        }));
        formIsValid = false;
      }
      if (email === "" || email.trim() === "") {
        setErrors((prev) => ({
          ...prev,
          email: "Please provide an email"
        }));
        formIsValid = false;
      }
      if (message === "" || message.trim() === "") {
        setErrors((prev) => ({
          ...prev,
          message: "Please provide a Message"
        }));
        formIsValid = false;
      }
      return formIsValid;
    }
    // Submit form
    const handleFormSubmit = (event) => {
      event.preventDefault(); 
      event.target.reset();
      const formIsValid = handleErrors();
    if (formIsValid) {
      setOpen(true);
      setformmessage('successfully sent')
    }
   
  //  Send Email on submit 
    emailjs.sendForm('service_yejr9fd', 'template_88jmi74', event.target, 'user_nYHUsWESly75w7ANB3JGO')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    
    }
    // Close snackBar
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
    return <>
    <div id  = "contact" style = {{padding : '2em 0'}} >
      
          <Typography variant = 'h3' align = 'center' className={classes.heading}>Contact</Typography>
          <Grid item xs={12} className={classes.formContainer}>
            <form  onSubmit = {handleFormSubmit} noValidate autoComplete="off" >
              <div style = {{margin : '0 auto'}}>
                  <Grid 
                  item xs={8} md= {4}
                  className = {classes.inputGrid}>
                    <TextField
                      label = "Name" 
                      type = 'text' 
                      name = 'name'
                      className = {classes.inputfield}
                      onChange={handleInputChange}
                      helperText={errors.name}
                      variant = "outlined"
                      InputLabelProps={{
                        classes: {
                          root: classes.cssLabel,
                          focused: classes.cssFocused,
                        },
                      }}
                      InputProps={{
                        classes: {
                          root: classes.cssOutlinedInput,
                          focused: classes.cssFocused,
                          notchedOutline: classes.notchedOutline,
                        },
                      }}
                      error={errors.name !== ""}
                      
                  /></Grid>
                <Grid item xs={8} md= {4}
                className = {classes.inputGrid}>
                    <TextField 
                    label = 'Email' 
                    name = 'email' 
                    type = 'email' 
                    className = {classes.inputfield}
                    onChange={handleInputChange} 
                    helperText={errors.email}
                    variant = "outlined"
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    error={errors.email !== ""}
                    />
                </Grid>
                <Grid item xs={8} md= {4} className = {classes.inputGrid}>
                    <TextField 
                    label = 'Message' 
                    name = 'message' 
                    type = 'text' 
                    className = {classes.inputfield}  
                    onChange={handleInputChange}
                    helperText={errors.message}
                    variant = "outlined"
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                    error={errors.message !== ""}
                    />
                  </Grid>
                <Grid item xs={8} md= {4} className = {classes.inputGrid}>
               
                <Button type = 'submit' size="large" className={classes.SubmitBtn} >Send</Button>
                </Grid>
                </div>
          </form>
         
          <Snackbar
          severity="success"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={formMessage}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close"  onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />

        </Grid>
   </div>
    </>
}

export default Contact