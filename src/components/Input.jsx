export default function Input({name, isInputValid, error, placeholder}){
  return(
    <>
      {name === 'password' || name === 'email' || name === 'name' ?
      <>
        <p className="login__input-name">{name === 'email' ? 'E-mail' : name === 'password' ? "Пароль" : 'Имя'}</p>
        <input 
          type={name}
          className={`login__input ${isInputValid === undefined || isInputValid ? '' : 'login__input_invalid'}`}
          required
          maxLength={30}
          minLength={2}
          placeholder={placeholder}
        />
        <span className="login__error error">{error}</span>
      </>
      :
      name === 'search-bar' ?
      <>
        <input 
          type="text" 
          className='search-bar__input'
          placeholder="Фильм"
          required
        />
      </>
      :
      <>
        <input 
          type="text" 
          className={`profile__input ${isInputValid === undefined || isInputValid ? '' : 'profile__input_invalid'}`}
          required
          maxLength={30}
          minLength={2}
          placeholder={placeholder}
        />
        <span className="profile__error error">{error}</span>
      </>}
    </>
  )
}