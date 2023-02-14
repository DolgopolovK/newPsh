import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from "react-bootstrap";
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
