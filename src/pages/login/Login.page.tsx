import { Box, Container } from '@material-ui/core';
import { History } from 'history';
import React, { FormEventHandler } from 'react';
import Button from '../../components/button';
import Header from '../../components/header';
import Input from '../../components/input';
import { LoginUseCase } from '../../domain/use-cases/login.usecase';
import { UserPersistenceService } from '../../infra/services/user-persistence.service';
import useStyles from './styles';

type Props = {
  loginUseCase: LoginUseCase;
  userPersistenceService: UserPersistenceService;
  history: History;
};

const LoginPage: React.FC<Props> = ({
  loginUseCase,
  userPersistenceService,
  history,
}) => {
  const [name, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    loginUseCase.run({ email, name }).then((user) => {
      userPersistenceService.set(user);
      history.push('/car');
    });
  };

  const styles = useStyles();

  return (
    <>
      <Header
        userPersistenceService={userPersistenceService}
        history={history}
      />
      <Container className={styles.container}>
        <form onSubmit={handleSubmit}>
          <Box display='flex' flexDirection='column' gridGap='20px'>
            <Input
              placeholder='Name'
              onChange={(value) => setUsername(value)}
            />
            <Input placeholder='E-mail' onChange={(value) => setEmail(value)} />
            <Button role='submit' type='submit'>
              Login / Create
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default LoginPage;
