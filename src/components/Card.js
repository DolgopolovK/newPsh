import 'animate.css';
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
                                     <h5 className="textCardBodyTwo" >Наш бот подбирает Вам психолога, который специализируется на вашей проблеме</h5>
                                     <a href="https://t.me/psihologichno_bot"><button onClick={() => console.log('connect')} className = "cardButton">Оплатить</button></a>
                                 </div>
                             </div>
                         </div>
                     </div>          
                     <div className="cardGridItem">
                         <div className="flip">
                             <div className="front">
                                 <div className="front1">
                                     <h4 className="textCardHeader">
                                      Каждая следующая
                                     </h4>
                                     <div class="line"></div>
                                     <h5 className="textCardBody">1 800 рублей</h5>
                                     <h5 className="textCardBodyTwo">Наш бот подбирает Вам психолога, который специализируется на вашей проблеме</h5>
                                     <a href="https://t.me/psihologichno_bot"><button onClick={() => console.log('connect')} className = "cardButton">Оплатить</button></a>
                                 </div>
                             </div>                       
                         </div>
                     </div>      
                </div>
            </section>
    </section>
  )
}