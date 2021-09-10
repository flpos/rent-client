import { Box, Container } from '@material-ui/core';
import { History } from 'history';
import React, { FormEventHandler } from 'react';
import Button from '../../components/button';
import Header from '../../components/header';
import Input from '../../components/input';
import { LoginUseCase } from '../../domain/use-cases/login.usecase';
import { UserPersistenceService } from '../../infra/services/user-persistence.service';
import validateEmail from '../../utils/validateEmail';
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
  const [error, setError] = React.useState({ name: '', email: '' });

  React.useEffect(() => {
    if (email.length <= 3) {
      setError((error) => ({ ...error, email: '' }));
      return;
    }
    const validEmail = validateEmail(email);
    if (!validEmail) {
      setError((error) => ({ ...error, email: 'not a valid e-mail' }));
    }
  }, [email]);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    if (name.length < 3) {
      return setError({
        ...error,
        name: 'Name must have at least three characters',
      });
    }
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
              onChange={(value) => {
                setError({ ...error, name: '' });
                setUsername(value);
              }}
              error={error.name}
            />
            <Input
              placeholder='E-mail'
              onChange={(value) => {
                setError({ ...error, email: '' });
                setEmail(value);
              }}
              error={error.email}
            />
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
