import { makeStyles } from '@material-ui/core'
import customTheme from './customTheme'

export const eventStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: customTheme.palette.primary.main,
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
            color: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'green'
            },
            '&:hover fieldset': {
                borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green'
            }
        }
    },
    link: {
        color: 'white',
            textDecoration: 'none',
    }
}))