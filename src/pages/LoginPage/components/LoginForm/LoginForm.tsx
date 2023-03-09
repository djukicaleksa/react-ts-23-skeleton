import { Button, Input } from 'antd';
import { useState } from 'react';
import { authService } from '../../../../modules/auth/auth.service';

import style from './LoginForm.module.scss';

import { to } from 'await-to-js';
import { useNavigate } from 'react-router-dom';
export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSetUsername: React.ChangeEventHandler<HTMLInputElement> = e => {
    setUsername(e.target.value);
  };
  const handleSetPassword: React.ChangeEventHandler<HTMLInputElement> = e => {
    setPassword(e.target.value);
  };

  //  AWAIT-TO-JS is synthatic sugar to lower amount of lines needed for try catch
  // "to" function always returns array that has error as first element of array and response as second element
  // if api request is successfull err value will be undefined
  const handleLogin = async () => {
    const [err, res] = await to(authService.logIn({ username, password }));
    if (err) return console.log(err);
    console.log(res);
    navigate('/home');
  };

  // without Await TO JS
  const _handleLoginWithoutAwaitTOJs = async () => {
    try {
      await authService.logIn({ username, password });
    } catch (error) {
      console.log(error);
    } finally {
      navigate('/home');
    }
  };

  return (
    <div className={style.loginForm}>
      <Input className={style.userInput} value={username} onChange={handleSetUsername} />
      <Input className={style.passwordInput} value={password} onChange={handleSetPassword} />
      <Button type="primary" onClick={handleLogin}>
        LOGIN
      </Button>
    </div>
  );
};
