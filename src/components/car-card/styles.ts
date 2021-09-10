import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    padding: '24px',
    justifyContent: 'space-between',
  },
  image: {
    width: '200px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});

export default useStyles;
