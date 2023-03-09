import { LoginForm } from './components/LoginForm/LoginForm';
import { LoginHeader } from './components/LoginHeader/LoginHeader';
import style from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <div className={style.loginPage}>
      <LoginHeader />
      <div className={style.formWrapper}>
        <LoginForm />
      </div>
    </div>
  );
};
