import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Rectangle48 from "../assets/img/Rectangle 48.png";
export const Card = () => {

  

  return (
    <section className="Cardss" id="">
    
      <section className="cardDevelops">
        <div className="textCard">
          <h2 className="textCardh2">Мы уверенны, что психологическая помощь должна быть доступна каждому</h2>
        </div>
                <div className="cardGrid">
                        <div className="cardGridItem">
                            <div className="flip">
                             <div className="front">
                                 <div className="front1">
                                     <h4 className="textCardHeader">
                                     Первая консультация 
                                     </h4>
                                     <div class="line"></div>
                                     <h5 className="textCardBody" >1 500 рублей</h5>
                                     <h5 className="textCardBodyTwo" >Наш бот подбирает Вам психолога, который... </h5>
                                     <button onClick={() => console.log('connect')} className = "cardButton">Оплатить</button>
                                 </div>
                             </div>
                         </div>
                     </div>          
                     <div className="cardGridItem">
                         <div className="flip">
                             <div className="front">
                                 <div className="front1">
                                     <h4 className="textCardHeader">
                                      Каждая следующая консультация
                                     </h4>
                                     <div class="line"></div>
                                     <h5 className="textCardBody">1 500 рублей</h5>
                                     <h5 className="textCardBodyTwo">Наш бот подбирает Вам психолога, который... </h5>
                                     <button onClick={() => console.log('connect')} className = "cardButton">Оплатить</button>
                                 </div>
                             </div>                       
                         </div>
                     </div>      
                </div>
            </section>
    </section>
  )
}