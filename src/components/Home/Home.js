import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../../assets/images/logo.jpg'
import './Home.css'

import ExerciseList from '../ExerciseList/ExerciseList';
import Activity from '../Activity/Activity';
import Blog from '../Blog/Blog';


const Home = () => {
    const [totalTime, setTotalTime] = useState(0)
    const [breakTime, setBreakTime] = useState(0)
    const handleAddTime = (exercise) => {
        const selectedTime = exercise.time;
        setTotalTime(totalTime + selectedTime);
        console.log(totalTime)
    }
    const handleBreakTime = breakTime => {
        localStorage.setItem("breakTime", breakTime.time);
        setBreakTime(breakTime.time)
    }

    useEffect(() => {
        const storageBreakTime = localStorage.getItem("breakTime");
        setBreakTime(storageBreakTime)
    }, [])
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

                    <Col className='bg-white position-relative rounded-bottom mt-5 mt-lg-0' lg='4'>
                        <Activity
                            totalTime={totalTime}
                            breakTime={breakTime}
                            handleBreakTime={handleBreakTime}
                        ></Activity>
                    </Col>

                </Row>
                <Blog></Blog>
            </Container>
        </div>
    );
};

export default Home;