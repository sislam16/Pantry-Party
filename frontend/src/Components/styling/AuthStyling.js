import { makeStyles } from '@material-ui/core'


export const authStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: 'orange',
        margin: theme.spacing(3),
    },
    textField: {
        margin: 'normal',
        label: 'green',
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
        color:'white',
        textDecoration: 'none',
    }

}))
