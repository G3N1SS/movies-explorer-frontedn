import image from "../images/pic__COLOR_pic.png"

export default function Card({films}){
  function handleLike(e){
    e.target.classList.toggle('card__save_active')
  }

  function handleDelete(){
    console.log('deleted')
  }

  return(
    <li className="main-page__card card">
      <img src={image} alt="card" className="card__img"/>
      <div className="card__banner">
        <div className="card__text">
          <h3 className="card__title">33 слова о дизайне</h3>
          <p className="card__duration">1ч42м</p>
        </div>
        <button className={`card__save ${films ? "" : "card__save_cross"}`} onClick={films ? handleLike : handleDelete}>{films ? "" : "+"}</button>
      </div>
    </li>
    )
}