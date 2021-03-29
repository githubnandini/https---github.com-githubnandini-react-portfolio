import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridItem : {
        minHeight : '200px',
        margin: '0 20px',
        border: '1px solid #fff',
        borderRadius: '5px',
        padding : '10px',
        cursor : 'pointer',
        '&:hover': {
            background: "#f9004d",
            transform: 'scale(1.1)'
         },
         [theme.breakpoints.down('xs')]: {
            margin: '20px 0'
           }
    },
    bar : {
        backgroundColor: '#f9004d !important'
    },
    gridContainer : {
        display : 'flex',
        justifyContent : 'center',
        padding : '3em 0'
    },
    text : {
       padding: '10px 0'
    },
    gridImage: {
        width : '60px',
        display : 'flex',
        margin : '0 auto'
    },
    buttonColor: {
        color : 'white',
        border: '1px solid white',
        cursor : 'pointer'
    },
    Container : {
        margin : '3em'

    },
    formContainer : {
        marginTop : '3em'
    },
    skillHeading : {
        marginBottom : '1em',
        textDecoration : 'underline',
        textUnderlinePosition: 'under',
    },
    inputfield : {
      color : '#fff !important',
      width : '100%',
      marginBottom : '10px',
    },
    cssLabel: {
        color : 'White'
      },
    
      cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
          borderColor: `${theme.palette.primary.main} !important`,
        }
      },
    
      cssFocused: {},
    
      notchedOutline: {
        borderWidth: '1px',
        borderColor: 'white !important'
      },
    SubmitBtn : {
        width : '100%',
        color : 'white',
        border: '1px solid white',
        marginTop : '2em',
        cursor : 'pointer'
    },
    inputGrid : {
        margin :'0 auto'
    },
    socialIconContainer : {
        margin: '2em 0'
    },
    socialIcon : {
        margin : '0 10px',
        height: '30px',
        width: '30px',
        cursor : 'pointer'
    },
    heading : {
        textDecoration : 'underline',
        textUnderlinePosition: 'under',
        marginBottom : '20px'
    },
    snackbar : {
        backgroundColor : 'green !important'
    },
    socialLink : {
        color : 'white',
        '&:visited': {
            color : 'white',
         },
    },
    downloadBtn : {
        
        '&:hover': {
            textDecoration : 'none',
         },
    },
    para : {
        marginTop : '2em'
    },
    menuItem : {
        '&:hover': {
            textDecoration : 'underline',
            textUnderlinePosition: 'under'
        },
    },
    cardLink : {
        color : 'white',
        '&:hover': {
            textDecoration : 'none',
           color : 'white'
        },
    },
    headerContainer : {
        display : 'flex',
        justifyContent : 'space-between'
        },
        
        navMenu :{
            display : 'flex',
            [theme.breakpoints.down('xs')]: {
               display : 'none'
              }
        }
}))
export default useStyles;