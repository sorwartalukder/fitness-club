import React from 'react';
import { HiCheckCircle } from "react-icons/hi";
import UserProfile from '../UserProfile/UserProfile';

const Activity = ({ totalTime }) => {
    return (
        <div className=' py-5 px-4 position-sticky top-0'>
            <UserProfile></UserProfile>
            <div className='mt-5'>
                <h4 className='text-color'>Add A Break</h4>
                <div className='d-flex justify-content-around bg-info rounded my-4 pt-3 pb-2'>
                    <div>
                        <h3 className='bg-white rounded-circle p-2 '>20</h3>
                    </div>
                    <div>
                        <h3 className='bg-white rounded-circle p-2'>30 </h3>
                    </div>
                    <div>
                        <h3 className='bg-white rounded-circle p-2'>40 </h3>
                    </div>
                    <div>
                        <h3 className='bg-white rounded-circle p-2'>50</h3>
                    </div>
                </div>
                <h4 className='mt-5 text-color'>Exercise Details</h4>
                <div className='d-flex justify-content-between px-3 bg-info rounded mt-4 py-3'>
                    <h5>Exercise time</h5>
                    <h5 className='text-black-50'>{totalTime} seconds</h5>
                </div>
                <div className='d-flex justify-content-between px-3 bg-info rounded mt-4 py-3'>
                    <h5>Break time</h5>
                    <h5 className='text-black-50'>00 seconds</h5>
                </div>
                <div className='text-center mt-4 '>
                    <button className='btn btn-info w-100 py-3 fs-5 fw-semibold'>Activity Completed <HiCheckCircle /> </button>
                </div>
            </div>
        </div>
    );
};

export default Activity;

