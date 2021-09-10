import { History } from 'history';
import React from 'react';
import { UserPersistenceService } from '../../infra/services/user-persistence.service';
import Button from '../button';

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

  return (
    <header>
      <div>Hello {user?.username}!</div>
      <Button onClick={handleLogOut}>Log Out</Button>
    </header>
  );
};

export default Header;
