import React from 'react'
import {AppBar, MenuItem, Toolbar, Typography, Grid, useMediaQuery,Menu } from '@material-ui/core'
import useStyles from './styles'
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-scroll'

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    const classes = useStyles();
    const isActive = useMediaQuery("(max-width : 600px)")
    return <>
    <AppBar position="fixed" style = {{background : 'black'}} >
        <Toolbar className={classes.headerContainer} >
            <Typography variant = 'h6'>Portfolio</Typography>
            {isActive && <Grid className={classes.navIcon}>
            
            
            <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
     
            </Grid>}
            <Grid className={classes.navMenu}>
            <MenuItem className={classes.menuItem}><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></MenuItem>
            <MenuItem className={classes.menuItem}><Link  to="about" spy={true} smooth={true}>About</Link></MenuItem>
           <MenuItem className={classes.menuItem}><Link  to="skills" spy={true} smooth={true}>Skills</Link></MenuItem>
           <MenuItem className={classes.menuItem}><Link  to="work" spy={true} smooth={true}>Work</Link></MenuItem>
           <MenuItem className={classes.menuItem}><Link  to="contact" spy={true} smooth={true}>Contact</Link></MenuItem>
            </Grid>
            </Toolbar>
            </AppBar>
            <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          <MenuItem><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></MenuItem>
          <MenuItem ><Link  to="about" spy={true} smooth={true}>About</Link></MenuItem>
           <MenuItem ><Link  to="skills" spy={true} smooth={true}>Skills</Link></MenuItem>
     <MenuItem ><Link  to="work" spy={true} smooth={true}>Work</Link></MenuItem>
       <MenuItem ><Link  to="contact" spy={true} smooth={true}>Contact</Link></MenuItem>
      </Menu>
    </>
}

export default Header