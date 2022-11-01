import React, { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../../assets/images/logo.jpg'
import './Home.css'

import ExerciseList from '../ExerciseList/ExerciseList';
import Activity from '../Activity/Activity';


const Home = () => {
    const [totalTime, setTotalTime] = useState(0)
    const [breakTime, setBreakTime] = useState(0)
    const handleAddTime = (exercise) => {
        const selectedTime = exercise.time;
        setTotalTime(totalTime + selectedTime);
        console.log(totalTime)
    }
    const handleBreakTime = breakTime => {
        setBreakTime(0)
        setBreakTime(breakTime.time)
    }
    return (
        <div className='body-bg'>
            <Container>
                <Row>
                    <Col lg='8'>
                        <div className='d-flex align-items-center my-5 text-color'>
                            <Image className='me-2 border border-5 rounded' src={logo} style={{ width: '80px' }}></Image>
                            <h1 className='fw-bold'>Fitness Club</h1>
                        </div>
                        <ExerciseList handleAddTime={handleAddTime}></ExerciseList>
                    </Col>

                    <Col className='bg-white position-relative' lg='4'>
                        <Activity
                            totalTime={totalTime}
                            breakTime={breakTime}
                            handleBreakTime={handleBreakTime}
                        ></Activity>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Home;