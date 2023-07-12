import { useState } from 'react';
import DropdownFilter from './FilterExercise';
import SingleExercise from './SingleExercise';


const ExerciseList = ({ exercises } ) => {
    const autoLoadedExerciseNodes = exercises.map((exercise) => {
        return <SingleExercise key={exercise._id} exercise={exercise}  />
    });



    return (
        <div className="exercise-list">

            <DropdownFilter />

            <h2>OR</h2>

            <h2>Choose what you want to do:</h2>
                <div className="exercise-wrapper" >
                    { autoLoadedExerciseNodes } 
                </div>
                
        </div>
    )
}

export default ExerciseList;