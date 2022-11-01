import React from 'react';
import toast from 'react-hot-toast';
import { HiCheckCircle } from "react-icons/hi";
import UserProfile from '../UserProfile/UserProfile';

const Activity = ({ totalTime, handleBreakTime, breakTime }) => {
    const breakTimes = [
        { time: 20 },
        { time: 30 },
        { time: 40 },
        { time: 50 }
    ]
    const handleActivityDone = () => {
        toast.success('Congratulations your activity done')
    }
    return (
        <div className=' py-5 px-4 position-sticky top-0'>
            <UserProfile></UserProfile>
            <div className='mt-5'>
                <h4 className='text-color'>Add A Break</h4>
                <div className='d-flex justify-content-around bg-info rounded my-4 pt-3 pb-2'>
                    {
                        breakTimes.map((breakTime, indx) => <h3
                            key={indx}
                            onClick={() => handleBreakTime(breakTime)}
                            className='bg-white rounded-circle p-2 '>{breakTime.time}</h3>)
                    }
                </div>
                <h4 className='mt-5 text-color'>Exercise Details</h4>
                <div className='d-flex justify-content-between px-3 bg-info rounded mt-4 py-3'>
                    <h5>Exercise time</h5>
                    <h5 className='text-black-50'>{totalTime} seconds</h5>
                </div>
                <div className='d-flex justify-content-between px-3 bg-info rounded mt-4 py-3'>
                    <h5>Break time</h5>
                    <h5 className='text-black-50'>{breakTime} seconds</h5>
                </div>
                <div className='text-center mt-4 '>
                    <button onClick={handleActivityDone} className='btn btn-info w-100 py-3 fs-5 fw-semibold'>Activity Completed <HiCheckCircle /> </button>
                </div>
            </div>
        </div>
    );
};

export default Activity;

