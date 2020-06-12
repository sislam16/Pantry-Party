import { makeStyles } from '@material-ui/core'
import customTheme from './customTheme'


export const authStyles = makeStyles((theme) => ({
    background:{
        backgroundColor: customTheme.palette.primary.main,
        height:'100%'
    },
    button: {
        backgroundColor: 'orange',
        margin: theme.spacing(3),
    },
    textField: {
        margin: 'normal',
        label: customTheme.palette.secondary.main,
        error: theme.palette.error.dark,
        '& label.Mui-focused': {
            color: '#0066b2',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#0066b2'
            },
            '&:hover fieldset': {
                borderColor: '#0066b2',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#0066b2'
            }
        }
    },
    link: {
        color:'#ed7902',
        fontWeight:'bold',
        textDecoration: 'none',
    }

}))
