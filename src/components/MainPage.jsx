import Header from "./Header";
import Footer from "./Footer";
import Input from "./Input";
import Icon from "../images/text__COLOR_invisible.svg"
import CardSection from "./CardSection";
import Card from "./Card";

export default function MainPage({films}){
  function off(e){
    e.target.classList.toggle('search-bar__shortfilms-button_active')
  }

  return(
    <>
      <Header black={true}/>
      <section className="main-page">
        <div className="container container_main-page">
          <div className="main-page__search-bar search-bar">
            <div className="search-bar__box">
              <Input
                name={'search-bar'}
              />
              <button className="search-bar__search-button"><img src={Icon} alt="arrow"/></button>
            </div>
            <div className="search-bar__shortfilms-box">
              <button className="search-bar__shortfilms-button" onClick={off}/>
              <p className="search-bar__shortfilms-caption">Короткометражки</p>
            </div>
          </div>
          <CardSection>
            <Card films={films}></Card>
            <Card films={films}></Card>
            <Card films={films}></Card>
            <Card films={films}></Card>
            <Card films={films}></Card>
            <Card films={films}></Card>
            <Card films={films}></Card>
            <Card films={films}></Card>
            <Card films={films}></Card>
            <Card films={films}></Card>
            <Card films={films}></Card>
            <Card films={films}></Card>
          </CardSection>
        </div> 
        <button className="main-page__more">Ещё</button>
      </section>
      <Footer/>

    </>
  )
}    