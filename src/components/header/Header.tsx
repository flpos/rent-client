import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import { History } from 'history';
import React from 'react';
import { UserPersistenceService } from '../../infra/services/user-persistence.service';
import Button from '../button';
import useStyles from './styles';

type Props = {
  userPersistenceService: UserPersistenceService;
  history: History;
};

const Header: React.FC<Props> = ({ userPersistenceService, history }) => {
  const user = React.useMemo(() => {
    return userPersistenceService.get();
  }, [userPersistenceService]);

  const handleLogOut = () => {
    userPersistenceService.clear();
    history.push('/login');
  };

  const styles = useStyles();

  return (
    <AppBar position='sticky'>
      <Container>
        <Toolbar>
          <Typography variant='h6'>Rent a Car!</Typography>
          <Typography variant='h6' className={styles.text}>
            Hello {user?.name}!
          </Typography>
          <Button onClick={handleLogOut}>Log Out</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
