import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './hero-section.css'
import heroImg from '../../assets/images/hero.jpg'
const HeroSection = () => {
    return (
        <section className='hero__section'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                            <h2>Discover rate digital art and collect
                                <span>sell extraordinary </span>
                                &nbsp;NFTs
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reiciendis modi ducimus quasi ab error officia est
                                dicta sed dolor tenetur soluta libero ullam quos voluptatum recusandae labore,
                                nam ad id!
                            </p>
                            <div className="hero__btns d-flex align-items-center gap-4">
                                <button className='explore__btn d-flex align-items-center gap-2'>
                                    <i className='ri-rocket-line'></i>
                                    <Link to='/market'>Explore</Link>
                                </button>

                                <button className='create__btn d-flex align-items-center gap-2'>
                                    <i className='ri-ball-pen-line'></i>
                                    <Link to='/create'>Explore</Link>
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src={heroImg} alt="" className='w-100' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroSection