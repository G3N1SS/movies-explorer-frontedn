import Header from "./Header";
import Input from "./Input";

export default function Profile({name}){
  return(
    <>
      <Header
        black={true}
      />
      <section className="profile">
        <div className="container container_profile">
          <h2 className="profile__greeting">Привет, {name}</h2>
          <div className="profile__input-box">
            <h3 className="profile__input-name">Имя</h3>
            <Input placeholder={'Имя'}/> 
          </div>
          <div className="profile__input-box">
            <h3 className="profile__input-name">E-mail</h3>
            <Input placeholder={'E-mail'}/> 
          </div>
          <button className="profile__edit">Редактировать</button>
          <button className="profile__exit">Выйти из аккаунта</button>
        </div>
      </section>
    </>
  )
}