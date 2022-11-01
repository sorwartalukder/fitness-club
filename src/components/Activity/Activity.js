import React from 'react';
import UserProfile from '../UserProfile/UserProfile';

const Activity = () => {
    return (
        <div className='bg-white py-5 px-4'>
            <UserProfile></UserProfile>
            <div className='mt-4'>
                <h4>Add A Break</h4>
                <div className='d-flex justify-content-around body-bg rounded my-4 pt-3 pb-2'>
                    <div>
                        <h3 className='bg-white rounded-circle p-2'>10 </h3>
                    </div>
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
                <h4>Exercise Details</h4>
                <div className='d-flex justify-content-between px-3 body-bg rounded mt-4 py-2'>

                    <h5>Exercise time</h5>
                    <h5 className='text-black-50'>200 seconds</h5>

                </div>
                <div className='d-flex justify-content-between px-3 body-bg rounded mt-4 py-2'>

                    <h5>Break time</h5>
                    <h5 className='text-black-50'>15 seconds</h5>

                </div>

            </div>
        </div>
    );
};

export default Activity;

