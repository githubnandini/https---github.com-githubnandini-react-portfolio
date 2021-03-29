import React from 'react'
import {Grid, Typography,Link, Button} from '@material-ui/core'
import useStyles from './styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const About = () => {
    const classes = useStyles();
    return <>
    <Grid item xs={12} className={classes.Container} id = 'about'>
        <Grid md= {7} xs= {12}>
        <Grid md= {1}><Typography variant  = 'h3' className={classes.heading}>About</Typography></Grid> 
         <Typography variant = 'h6' paragraph className={classes.para}>
         Hi, I'm web developer with 1.5 years of experience. Currently am working as a Associate Software Developer at  
         <Link href = "https://suventure.in/"> Suventure Service Pvt Ltd.</Link> See my previous work history on 
          <Link href = "https://www.linkedin.com/in/nandini-g-v-17181715a/"> LinkedIn.</Link> Specializing in custom theme development in Shopify. If you're a business seeking a web presence or are looking to hire contact me
         </Typography>
        <Grid container alignItems="center" className={classes.socialIconContainer}>
        <Link  target="_blank" className={classes.socialLink}  href = "https://www.linkedin.com/in/nandini-g-v-17181715a/"><LinkedInIcon className={classes.socialIcon} /></Link>
        <Link  target="_blank" className={classes.socialLink} href = "https://www.facebook.com/nandini.reddy.9809672/" ><FacebookIcon className={classes.socialIcon} /></Link>
        <Link className={classes.socialLink} href="mailto:reachnandini1997@gmail.com"> </Link><MailIcon className={classes.socialIcon} />
        <Link  target="_blank" className={classes.socialLink} href= "https://www.instagram.com/__nandini.reddy/"><InstagramIcon className={classes.socialIcon} /></Link> 
        <Link  target="_blank" className={classes.socialLink} href = "https://github.com/githubnandini"><GitHubIcon className={classes.socialIcon} /></Link>
        </Grid>
        <Link className={classes.downloadBtn} href = '/Nandini-CV.pdf' download>
         <Button className={classes.buttonColor} >Download Cv</Button>
         </Link>
         </Grid>
        </Grid>
    </>
}

export default About