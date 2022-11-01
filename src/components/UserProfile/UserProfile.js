import React from 'react';
import user from '../../assets/images/user.jpg'
import { HiLocationMarker } from "react-icons/hi";
import { Image } from 'react-bootstrap';

const UserProfile = () => {
    return (
        <div>
            <div >
                <div className='d-flex'>
                    <Image roundedCircle src={user} style={{ height: '60px' }}></Image>
                    <div className='ms-2'>
                        <h5 className=' fw-bold mb-0'>Sorwar Talukder</h5>
                        <address><small><HiLocationMarker className='fs-5 me-1' />Dhaka, Bangladesh</small></address>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-around body-bg rounded mt-4 py-2'>
                <div>
                    <h3 className='d-inline '>55 </h3>
                    <p className='d-inline text-black-50'>kg</p>
                    <h5 className='text-black-50'>Weight</h5>
                </div>
                <div>
                    <h3 className=' '>5.4</h3>
                    <h5 className='text-black-50'>Height</h5>
                </div>
                <div>
                    <h3 className='d-inline '>23 </h3>
                    <p className='d-inline text-black-50'>Yrs</p>
                    <h5 className='text-black-50'>Age</h5>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;