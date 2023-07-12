import React, { useEffect, useState } from "react";
import ExerciseList from "../components/ExerciseList";
import getAllExercises  from "../services/ExerciseService";


const ExerciseContainer = () => {

    const [exerciseListings, setExerciseListings] = useState([]);

    // the initial fetch and data load showing 10 exercises to choose from
    useEffect(() => {
        getAllExercises()
        .then(intialExerciseListings => setExerciseListings(intialExerciseListings));
    }, [])


    return (
        <div className="exerciseContainer">        
            <ExerciseList exerciseListings={exerciseListings} setExerciseListings={setExerciseListings}/>

        </div>
    );
};

export default ExerciseContainer;