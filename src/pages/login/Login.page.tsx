import React, { FormEventHandler } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import { LoginUseCase } from '../../domain/use-cases/login.usecase';
import { UserPersistenceService } from '../../infra/services/user-persistence.service';
import { History } from 'history';

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder='username'
          onChange={(value) => setUsername(value)}
        />
        <Input placeholder='email' onChange={(value) => setEmail(value)} />
        <Button role='submit' type='submit'>
          Send
        </Button>
      </form>
    </>
  );
};

export default LoginPage;
