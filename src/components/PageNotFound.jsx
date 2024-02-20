import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="nothing-found">
      <div className="container container_nothing-found">
        <h2 className="nothing-found__title">
          <span className="nothing-found__first-number">4</span>
          <span className="nothing-found__second-number">0</span>
          <span className="nothing-found__third-number">4</span>
        </h2>
        <p className="nothing-found__caption">Страница не найдена</p>
      </div>
      <Link to="/" className="nothing-found__link link">Назад</Link>
    </div>
  )
}