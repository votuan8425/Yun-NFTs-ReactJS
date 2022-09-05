import React, {useRef} from 'react'
import CommonSection from '../components/ui/Common-section/CommonSection'
import { Container, Row, Col } from "reactstrap"
import '../styles/contact.css'
const Contact = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const subjectRef = useRef('');
  const messRef = useRef('');



  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <>
      <CommonSection title='Contact' />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' className='m-auto text-center'>
              <h2>Drop a Message</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet neque labore earum quas nesciunt dolore consequatur eius recusandae
                sunt corporis non necessitatibus praesentium, ullam in, distinctio possimus explicabo
                suscipit ut.
              </p>
              <div className="contact">
                <form onSubmit={handleSubmit}>
                  <div className="form__input">
                    <input type="text" placeholder='Enter your name' ref={nameRef}/>
                  </div>
                  <div className="form__input">
                    <input type="email" placeholder='Enter your email' ref={emailRef}/>
                  </div>
                  <div className="form__input">
                    <input type="text" placeholder='Enter subject' ref={subjectRef}/>
                  </div>
                  <div className="form__input">
                    <input type="text" placeholder='Write message' ref={messRef}/>
                  </div>
                  <button className='send__btn'>Send a Message</button>
                </form>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact