import React from 'react'
import {Grid, Typography, Link} from '@material-ui/core'
import useStyles from './styles'
import JsImage from '../java.png';
import ShopifyImage from '../shopify.png';
import ReactImage from '../react.png';

 const Work = () =>{
    const classes = useStyles();
    return <>
    <div id = "work">
   <Typography variant = 'h3' align = 'center' className={classes.heading}>Work</Typography>
<Grid  xs={12}container className={classes.gridContainer}>
<Grid className={classes.gridItem} item xs= {8} sm = {3}><Link target = "_blank" href = "#" className={classes.cardLink} >
<Typography  variant  = "h6"  className={classes.text} align = 'center'>Shopify</Typography>
<img className={classes.gridImage} src = {ShopifyImage} />
<Typography className={classes.text} align = 'center' paragraph>
Developing customized shopify website based on client's requirement, advanced functionality with a plugin/application. Besides the features to enhance sales and social media promotion, it also offers inventory management, accounting, and business reporting.
</Typography>
</Link>
</Grid>

<Grid className={classes.gridItem} item  xs= {8}  sm = {3}>
<Link className={classes.cardLink} target = "_blank" href = "https://github.com/githubnandini">
<Typography  variant  = "h6"  className={classes.text} align = 'center'>Javascript</Typography>
<img className={classes.gridImage} src = {JsImage} />
<Typography className={classes.text} align = 'center' paragraph>
Working on Object oriented programming with Javascript and creating functional & Responsive UI with ES6.
</Typography>
</Link>
</Grid>


<Grid className={classes.gridItem} item  xs= {8}  sm = {3}>
<Link className={classes.cardLink} target = "_blank" href = "https://github.com/githubnandini">
<Typography variant  = "h6" className={classes.text} align = 'center'>React</Typography>
<img className={classes.gridImage} src = {ReactImage} />
<Typography className={classes.text} align = 'center' paragraph>
Developing responsive, interactive and fast websites  experience that achieves business goals.
</Typography>
</Link>
</Grid>

</Grid>
</div>
</>
}
export default Work