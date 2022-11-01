import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../../assets/images/logo.jpg'
import './Home.css'
import { FaDumbbell } from "react-icons/fa";
import Cards from '../Cards/Cards';


const Home = () => {
    return (
        <div className='body-bg'>
            <Container>
                <Row>
                    <Col lg='8'>
                        <div className='d-flex align-items-center mt-5 text-color'>
                            <Image className='me-2 border border-5 rounded' src={logo} style={{ width: '80px' }}></Image>
                            <h1 className=''>Fitness Club</h1>
                        </div>
                        <h3 className=' text-color mt-5 pt-5'>Select today’s exercise <FaDumbbell className='ms-2 fs-1'></FaDumbbell></h3>
                        <Cards></Cards>
                    </Col>

                    <Col lg='4'>
                        activity
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Home;