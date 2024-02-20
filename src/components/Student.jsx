import studentimg from "../images/picture.jpg"
import arrow from "../images/arrow.svg"

function Student(){
  return(
    <section className="student">
      <div className="container container_student">
        <h2 className="student__title">Студент</h2>
        <div className="underline student__underline"></div>
        <div className="student__info">
          <div className="student__info-about">
            <h2 className="student__name">Арег</h2>
            <p className="student__profession">Фронтенд-разработчик, 17 лет</p>
            <p className="student__about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a href="" className="student__github link">Github</a>
          </div>
          <img src={studentimg} alt="" className="student__info-img" />
        </div>
        <div className="student__portfolio">
          <h3 className="student__portfolio-title">Портфолио</h3>
          <ul className="student__portfolio-links">
            <li className="student__portfolio-link">
              <a href="" className="student__portfolio-link-text link">Статичный сайт</a>
              <img src={arrow} alt="" className="student__portfolio-link-icon"/>
            </li>
            <div className="underline underline_dark"></div>
            <li className="student__portfolio-link">
              <a href="" className="student__portfolio-link-text link">Адаптивный сайт</a>
              <img src={arrow} alt="" className="student__portfolio-link-icon"/>
            </li>
            <div className="underline underline_dark"></div>
            <li className="student__portfolio-link">
              <a href="" className="student__portfolio-link-text link">Одностраничное&nbsp;приложение</a>
              <img src={arrow} alt="" className="student__portfolio-link-icon"/>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Student