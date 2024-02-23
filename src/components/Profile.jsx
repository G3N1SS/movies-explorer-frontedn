import { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import { Link } from "react-router-dom";

export default function Profile({name}){
  const [isEdit, setIsEdit] = useState(false)
  function handleEdit(){
    if(isEdit){
      setIsEdit(false)
    }else{
      setIsEdit(true)
    }
  }
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
          {isEdit ? 
          <button className="profile__submit" onClick={handleEdit}>Сохранить</button>
          :
          <>
          <button className="profile__edit" onClick={handleEdit} type="button">Редактировать</button>
          <Link to="/" className="profile__exit">Выйти из аккаунта</Link>
          </>}
        </div>
      </section>
    </>
  )
}