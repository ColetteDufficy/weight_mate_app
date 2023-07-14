import React, { useState } from "react";
import { API_KEY } from '../env.js';
import ExerciseService from "../services/ExerciseService";


const FilterExercise = ({ setExerciseListings }) => {

    // setting up useState hook for the 3 options
    const [selectedType, setSelectedType] = useState('');
    const [selectedMuscle, setSelectedMuscle] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const [fetchedDataMsg, setFetchedDataMsg] = useState(false);


    // hard coded list of options for the drop down menus
    const dropdownType = ["Cardio", "Olympic Weightlifting", "Plyometrics", "Powerlifting", "Strength", "Stretching", "Strongman"];
    const dropdownMuscle = ["Abdominals", "Abductors", "Adductors", "Biceps", "Calves", "Chest", "Forearms", "Glutes", "Hamstrings", "Lats", "Lower Back", "Middle Back", "Neck", "Quadriceps", "Shoulders", "Traps", "Ttriceps"];
    const dropdownDifficulty = ["Beginner", "Intermediate", "Expert"];


    // event handler - function 
    const handleTypeSelected = (event) => {
        const selectedValueType = event.target.value;
        setSelectedType(selectedValueType);
    };

    // event handler - function 
    const handleMuscleSelected = (event) => {
        const selectedValueMuscle = event.target.value;
        setSelectedMuscle(selectedValueMuscle);
    };

      // event handler - function 
    const handleDifficultySelected = (event) => {
        const selectedValueDifficulty = event.target.value;
        setSelectedDifficulty(selectedValueDifficulty);
    };


      // event handler of onClick event for the Search button
    const handleSearch = (evt) => {
        evt.preventDefault()
        ExerciseService.filteredFetch(selectedType, selectedMuscle, selectedDifficulty) // this is the fetch() being called on the filtered results. Taking in 3 arguments

        .then(data => {
            // console.log("data from filter search", data); 
                if (data.length === 0) {
                    setFetchedDataMsg(true)
                    ExerciseService.randomInitialFetchExercises() 
                    // .then(intialExerciseListings => setExerciseListings(intialExerciseListings));

                } else {
                    setFetchedDataMsg(false)
                    setExerciseListings(data);  // updates the value of exerciseListings by using the useState setExerciseListings method and data as the argument
                }
        })
        .catch(err => console.error(err));
    };



    return (
    <form>
        
        <select value={selectedType} onChange={handleTypeSelected} selectedType={selectedType} >
            <option value="">Select a type</option>
            {dropdownType.map((type) => (
            <option key={type} value={type}>
            {type}
            </option>
            ))}
        </select>

        <select value={selectedMuscle} onChange={handleMuscleSelected}>
            <option value="">Select a muscle group</option>
            {dropdownMuscle.map((muscle) => (
            <option key={muscle} value={muscle}>
            {muscle}
        </option>
        ))}
        </select>

        <select value={selectedDifficulty} onChange={handleDifficultySelected}>
            <option value="">Select a difficulty level</option>
            {dropdownDifficulty.map((difficulty) => (
            <option key={difficulty} value={difficulty}>
            {difficulty}
        </option>
        ))}
        </select>

        <button onClick={handleSearch} > Search</button>
        <button> Clear </button>
        {fetchedDataMsg && <h3>Sorry. There are no results for your search. But have a look below</h3>}

    </form>
    );
};

export default FilterExercise;