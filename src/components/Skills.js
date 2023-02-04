import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/BannerBG.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  

  return (
    <section className="skill1" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={12} xl={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className="divCenter">
                <h1> <span className="skill2Text">Психологично </span>- это удобный Telegram-бот для подбора личного психолога, не нужно ничего устанавливать, просто добавь бота и начни поиск.</h1>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
