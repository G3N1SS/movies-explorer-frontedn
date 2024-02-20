import { Link } from 'react-router-dom';
import Form from './Form';
import logo from '../images/logo.svg'

export default function EntrancePage({name, children}){
  return(
    <section className="login">
      <div className="container container_login">
        <Link to={'/'} className='login__logo'><img src={logo} alt=""/></Link>
        <h2 className="login__title">{name === 'sign-up' ? 'Добро пожаловать!' :  'Рады видеть!'}</h2>
        <Form
          name={name}
          children={children}
          titleButton={name === 'sign-up' ? 'Зарегистрироваться' :  'Войти'} 
        />
        {name === 'sign-up' ? 
        <div className='login__caption'>
          <p className="login__caption-text">Уже зарегистрированы?</p>
          <Link className="login__link link link_login" to="/sign-in">Войти</Link> 
        </div>
        : 
        <div className='login__caption'>
          <p className="login__caption-text">Ещё не зарегистрированы?</p>
          <Link className="login__link link link_login" to="/sign-up">Регистрация</Link> 
        </div> }
      </div>
    </section>
  )
}