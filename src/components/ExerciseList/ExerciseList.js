import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import { FaDumbbell } from "react-icons/fa";

const ExerciseList = ({ handleAddTime }) => {
    const [exerciseList, setExerciseList] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExerciseList(data))
    }, [])
    return (
        <div className='mb-5'>
            <h3 className=' text-color py-3'>Select today’s exercise <FaDumbbell className='ms-2 fs-1'></FaDumbbell></h3>
            <div className='row row-cols-1 row-cols-md-2 px-lg-5 g-4'>
                {
                    exerciseList.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        handleAddTime={handleAddTime}
                    ></Exercise>)
                }
            </div>
        </div>
    );
};

export default ExerciseList;