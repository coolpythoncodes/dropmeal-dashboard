import { Avatar } from '@material-ui/core';
import '../Sass/NewUsers.scss';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

const NewUsers = ({ name,time }) => {
    const classes = useStyles();
    return (
        <div className='new__users'>
            <Avatar className={classes.small} />
            <p>{name}</p>
            <p>{time} ago</p>
            <a href="/">See more</a>
        </div>
    );
}

export default NewUsers;
