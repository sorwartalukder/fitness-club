import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../../assets/images/logo.jpg'
import './Home.css'

import ExerciseList from '../ExerciseList/ExerciseList';
import Activity from '../Activity/Activity';


const Home = () => {
    return (
        <div className='body-bg'>
            <Container>
                <Row>
                    <Col lg='8'>
                        <div className='d-flex align-items-center my-5 text-color'>
                            <Image className='me-2 border border-5 rounded' src={logo} style={{ width: '80px' }}></Image>
                            <h1 className='fw-bold'>Fitness Club</h1>
                        </div>
                        <ExerciseList></ExerciseList>
                    </Col>

                    <Col className='bg-white position-relative' lg='4'>
                        <Activity></Activity>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Home;