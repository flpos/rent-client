import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    width: '480px',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
  },
  reservation: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    minWidth: '400px',
    margin: '0 auto',
    gap: '16px',
  },
  list: {
    padding: '20px 0px',
    margin: '0px 40px',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default useStyles;
