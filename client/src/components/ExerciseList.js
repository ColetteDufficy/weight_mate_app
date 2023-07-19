// import { useState } from 'react';
import FilterExercise from './FilterExercise';
import SingleExercise from './SingleExercise';
import ExerciseService from '../services/ExerciseService';


const ExerciseList = ({ exerciseListings, setExerciseListings } ) => {


    const initialLoadExerciseNodes = exerciseListings.map((exercise) => {
        return <SingleExercise key={exercise._id} exercise={exercise}  />
    });


    const handleShuffle = () => {
        ExerciseService.randomInitialFetchExercises()
        .then(intialExerciseListings => setExerciseListings(intialExerciseListings));
    }
    



    return (
        
        <div className="exercise-list">
            <div className='filtered_exercise_list'>
                <h2>What do you want to do today?</h2>
                <FilterExercise setExerciseListings = {setExerciseListings}/>
            </div>

            <br></br>
            <br></br>
            <br></br>

            <div className='initial_load_exercise_list'>
            <h2>Here's some ideas for you!</h2>
            
            <button onClick={handleShuffle}> Shuffle</button>

                <div className="exercise-wrapper" >
                    { initialLoadExerciseNodes } 
            </div>
                </div>
        </div>
        
    );
};


export default ExerciseList;