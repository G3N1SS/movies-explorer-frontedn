export default function Input({name, isInputValid, error}){
  return(
    <>
      {name === 'password' || name === 'email' || name === 'name' ?
      <>
        <p className="login__input-name">{name === 'email' ? 'E-mail' : name === 'password' ? "Пароль" : 'Имя'}</p>
        <input 
          type={name}
          className={`login__input ${isInputValid === undefined || isInputValid ? '' : 'login__input_invalid'}`}
        />
        <span className="login__error error">{error}</span>
      </>
      :
      name === 'search-bar' ?
      <>
        <input 
          type="text" 
          className={`search-bar__input ${isInputValid === undefined || isInputValid ? '' : 'search-bar__input_invalid'}`}
          placeholder="Фильм"
        />
        <span className="search-bar__error error">{error}</span>
      </>
      :
      <>
        <input 
          type="text" 
          className={`profile__input ${isInputValid === undefined || isInputValid ? '' : 'profile__input_invalid'}`}
        />
        {/* <span className="profile__error error">{error}</span> */}
      </>}
    </>
  )
}