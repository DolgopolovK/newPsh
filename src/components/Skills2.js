

import 'react-multi-carousel/lib/styles.css';
import botSkill1 from "../assets/img/BotSkill1.svg";

import 'animate.css';
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';


export const Skills2 = () => {
  

  return (
    <section className="skill2" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={10} md={6} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className="divImg">
                  <img className="botImg" src={botSkill1} alt="botImg"/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className='buttomMobil'>
                <h2> Бот сам подскажет как им пользоваться и напомнит о запланированной встрече. </h2>
                <div className='skill2buttonMobile'>
                <a href="https://t.me/psihologichno_bot"><button onClick={() => console.log('connect')} className = "skill2button">Перейти в Telegram</button></a>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}