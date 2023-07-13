// import { useState } from 'react';
import DropdownFilter from './FilterExercise';
import SingleExercise from './SingleExercise';


const ExerciseList = ({ exerciseListings, setExerciseListings } ) => {

    const autoLoadedExerciseNodes = exerciseListings ? (
        exerciseListings.map((exercise) => (
            <SingleExercise key={exercise._id} exercise={exercise} />
        ))
    ) : (
    <p>No exercises found.</p>
    );


    //orginal code - delete when fixed!
    // const autoLoadedExerciseNodes = exerciseListings.map((exercise) => {
    //     return <SingleExercise key={exercise._id} exercise={exercise}  />
    // });
    



    return (
        
        <div className="exercise-list">
            <h2>Choose your own</h2>
            <DropdownFilter setExerciseListings = {setExerciseListings}/>

            <h2>OR</h2>

            <h2>Today's suggestions for you</h2>
                <div className="exercise-wrapper" >
                    { autoLoadedExerciseNodes } 
                </div>
        </div>
        
    );
};


export default ExerciseList;