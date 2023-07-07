import './App.css';
import React, { useEffect, useState } from "react";
import logo from './weightlifting-logo.jpg';
import ExerciseList from "./components/ExerciseList";
import { getAllExercises } from "./services/ExerciseService";




function App() {

    const [exerciseListings, setExerciseListings] = useState([]);

    
    useEffect(() => {
        getAllExercises()
        .then(exerciseListings => setExerciseListings(exerciseListings));
    }, [])




    return (
        <div className="App">
            {/* <img style={{ width: '100px', height: 'auto' }} src={logo} /> */}
            {/* <p>nav bar to go here</p> */}
            <h1>My Weight Mate Training App</h1>
            <ExerciseList exercises={exerciseListings}/>

        </div>
    );
}

export default App;



