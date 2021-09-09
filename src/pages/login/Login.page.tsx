import React, { FormEventHandler } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import { LoginUseCase } from '../../domain/use-cases/login.usecase';

type Props = {
  loginUseCase: LoginUseCase;
};

const LoginPage: React.FC<Props> = ({ loginUseCase }) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    loginUseCase.run({ email, username });
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
