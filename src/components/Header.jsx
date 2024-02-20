import { useState } from "react"
import logo from '../images/logo.svg'
import account from '../images/account.svg'
import { Link } from 'react-router-dom';

export default function Header({black}){
  const [loggedIn, setLoggedIn] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isFilms, setIsFilms] = useState(false)
  const [isSavedFilms, setIsSavedFilms] = useState(false)

  function filmsButton(){
    setIsFilms(true)
    setIsSavedFilms(false)
  }

  function savedFilmsButton(){
    setIsSavedFilms(true)
    setIsFilms(false)
  }

  function onSignIn(){
    setLoggedIn(false)
  }

  function hamburgerClick(){
    if(isVisible){
      setIsVisible(false)
    }else{
      setIsVisible(true)
    }
  }
  return(
    <>
      <header className={`header ${black ? 'header_black': ''}`}>
        <div className="container container_header">
          <Link to="/"><img className="header__logo" src={logo}/></Link>
          {loggedIn ? 
          <>
            <div className="header__films">
              <Link to="/films" className={`header__button ${isFilms ? 'header__button_active' : ''} header__button_type_films button`} onClick={filmsButton}>Фильмы</Link>
              <Link to="/saved-films"className={`header__button ${isSavedFilms ? 'header__button_active' : ''} header__button_type_saved-films button`} onClick={savedFilmsButton}>Сохраненные фильмы</Link>
            </div>
          </>
          :
          <></>}
          <div className="header__button-container">
            {loggedIn ? 
              <>
              <Link to="/profile" className="header__button header__button_type_account account button">
                <p className={`header__account account__caption ${black ? 'account__caption_black' : ''}`}>Аккаунт</p>
                <img className={`header__account-pic account__pic ${black ? 'account__pic_black' : ''}`} src={account}/>
              </Link>
              <button className={`header__hamburger hamburger ${isVisible ? 'hamburger_active' : ''}`} onClick={hamburgerClick}>
                <hr className={`hamburger__line ${isVisible ? 'hamburger__line_cross' : ''}`} />
                {isVisible ? '' : <hr className="hamburger__line" />}
                <hr className={`hamburger__line ${isVisible ? 'hamburger__line_cross' : ''}`} />
              </button>
              </>
              : 
              <>
                <Link className="header__button header__button_type_signup button" onClick={onSignIn} to="/sign -up">Регистрирация</Link>
                <Link className="header__button header__button-type_signin button" onClick={onSignIn} to="/sign-in">Войти</Link>
              </>}
          </div>
        </div>
        <nav className={`hamburger__menu ${isVisible ? 'hamburger__menu_visible' : ''}`}>
          <div className="hamburger__links">
            <Link to="/" className="hamburger__link" onClick={hamburgerClick}>Главная</Link>
            <Link to="/films" className="hamburger__link" onClick={hamburgerClick}>Фильмы</Link>
            <Link to="/saved-films"className="hamburger__link" onClick={hamburgerClick}>Сохраненные фильмы</Link>
          </div>
          <Link to="/profile" className="hamburger__account-button account" onClick={hamburgerClick}>
            <p className='hamburger__account account__caption account__caption_black'>Аккаунт</p>
            <img className='hamburger__account-pic account__pic account__pic_black' src={account}/>
          </Link>
        </nav>
      </header>
    </>
  )
}