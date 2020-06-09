import {makeStyles} from '@material-ui/core'
import customTheme from './customTheme'


export const navStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      }, 
      appBar:{
        backgroundColor: customTheme.palette.primary.main
      },
      // logo:{
      //   height:'10%',
      // },
}))