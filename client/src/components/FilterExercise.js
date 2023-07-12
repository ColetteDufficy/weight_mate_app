import React, { useState } from "react";
import { API_KEY } from '../env.js';



// setting up useState hook for the 3 options
const DropdownFilter = ({ setExerciseListings }) => {
    const [selectedType, setSelectedType] = useState('');
    const [selectedMuscle, setSelectedMuscle] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('');


    // hard coded list of options for the drop down menus
    const dropdownType = ["Cardio", "Olympic Weightlifting", "Plyometrics", "Powerlifting", "Strength", "Stretching", "Strongman"];
    const dropdownMuscle = ["Abdominals", "Abductors", "Adductors", "Biceps", "Calves", "Chest", "Forearms", "Glutes", "Hamstrings", "Lats", "Lower Back", "Middle Back", "Neck", "Quadriceps", "Shoulders", "Traps", "Ttriceps"];
    const dropdownDifficulty = ["Beginner", "Intermediate", "Expert"];



    const handleTypeSelected = (event) => {
        const selectedValueType = event.target.value;
        setSelectedType(selectedValueType);
    };


    const handleMuscleSelected = (event) => {
        const selectedValueMuscle = event.target.value;
        setSelectedMuscle(selectedValueMuscle);
    };


    const handleDifficultySelected = (event) => {
        const selectedValueDifficulty = event.target.value;
        setSelectedDifficulty(selectedValueDifficulty);
    };


    const handleSearch = (evt) => {
        evt.preventDefault()
        fetch(`https://api.api-ninjas.com/v1/exercises?type=${selectedType}&muscle=${selectedMuscle}&difficulty=${selectedDifficulty}`, 
        { headers: { 'X-Api-Key': API_KEY }})
        .then(response => response.json())
        .then(data => {
            console.log("data from filter search", data)
            setExerciseListings(data);  
        })
        .catch(err => console.error(err));
    };



    return (
    <form>
        <select value={selectedType} onChange={handleTypeSelected}>
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

    </form>
    );
};

export default DropdownFilter;