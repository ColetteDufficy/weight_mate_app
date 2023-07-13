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


    // passing down state to the child ExerciseList:
    return (
        <div className="exerciseContainer">        
            <ExerciseList exerciseListings={exerciseListings} setExerciseListings={setExerciseListings}/>

        </div>
    );
};

export default ExerciseContainer;