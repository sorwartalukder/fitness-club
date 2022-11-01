import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaPlus } from 'react-icons/fa';

const Exercise = ({ exercise }) => {
    const { age, body, picture, time, title } = exercise
    return (
        <div className='col'>
            <Card className='bg-white shadow border border-5'>
                <Card.Img variant="top" src={picture} style={{ height: '200px' }} />
                <Card.Body>
                    <Card.Title className='fw-bold text-color'>{title}</Card.Title>
                    <Card.Text>
                        {body.slice(0, 100)}
                    </Card.Text>
                    <Card.Text className='m-1 fw-semibold text-color'>
                        For Age :  {age}
                    </Card.Text>
                    <Card.Text className='fw-semibold text-color' >
                        Time required :  {time}
                    </Card.Text>
                    <div className='text-center '>
                        <button className='btn btn-info fw-semibold text-color'>ADD <FaPlus></FaPlus></button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Exercise;