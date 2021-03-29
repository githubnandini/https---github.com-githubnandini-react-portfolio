import React from 'react'
import Image from '../Banner1.jpg';
import {Paper, Typography} from '@material-ui/core'

const styles = {
    BannerImage: {
        backgroundImage: `url(${Image})`,
        height : 600,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
    },
    BannerOverlay : {
        // backgroundColor : '#000000d1',
        position: 'absolute',
        top: '0',
        left: '0',
        width : '100%',
        height : '100%'
    },
    BannerText : {
        color : 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        lineHeight : '20'
    }
};

const Banner = (props) =>{

    return <>
    <div id = "home">
        <Paper style={styles.BannerImage} >
            <div style = {styles.BannerOverlay}>
            <div style = {styles.BannerText}>
                <Typography align = 'center' variant = 'h2'>Front-end Developer</Typography>
                <Typography align = 'center' variant = 'h5'>Hi. I’m Nandini, a Shopify Developer with 1 year experience creating successful websites.</Typography>
                </div>
                </div>
            </Paper>
            </div>
    </>
}

export default Banner