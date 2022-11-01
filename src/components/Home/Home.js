import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Row>

                <Col lg='8'>
                    <div className='d-flex'>
                        <Image></Image>
                        <h1>Fitness Club</h1>
                    </div>
                    card
                </Col>

                <Col lg='4'>
                    activity
                </Col>

            </Row>
        </div>
    );
};

export default Home;