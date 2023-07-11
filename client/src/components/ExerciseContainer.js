import React, { useEffect, useState } from "react";
import ExerciseList from "../components/ExerciseList";
import { getAllExercises } from "../services/ExerciseService";


const ExerciseContainer = () => {

    const [exerciseListings, setExerciseListings] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState([null]);

    // the initial fecth and data load showing 10 exercises to choose from
    useEffect(() => {
        getAllExercises()
        .then(intialExerciseListings => setExerciseListings(intialExerciseListings));
    }, [])

 
    // const banana = "dave"
    // const aFunction = (banana) => {
    //     console.log(banana)
    // }

    

    return (
        <div className="exerciseContainer">        
            <ExerciseList exercises={exerciseListings} setExerciseListings={setExerciseListings}/>

        </div>
    );
};

export default ExerciseContainer;