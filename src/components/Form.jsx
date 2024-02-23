export default  function Form({name, titleButton, children, onSubmit}){
  return(
    <form onSubmit={onSubmit} className="form">
      <div className={`form__elements-container ${name === 'sign-up' ? 'form__elements-container_registration' : ''}`}>
      {children}
      </div>
      {name === 'sign-in' || name === 'sign-up' ? 
      <button className="login__submit" type="submit">
        {titleButton}
      </button>
      :
      <button className="profile__submit" type="submit">
        {titleButton}
      </button>
    }
    </form>
  )
} 