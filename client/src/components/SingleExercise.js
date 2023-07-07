import React, { useState } from "react"
import ExerciseDescriptionPopup from "./ExerciseDescriptionPopup";
import OutsideClickHandler from 'react-outside-click-handler';



const SingleExercise = ({exercise}) => {
    // console.log(exercise);

        // usestate to control the display of the exercise description popup
        const [displayDescription, setDisplayDescription] = useState(false);

        // popup always starts hidden. 
        const handleDisplayDescription = () => {
            setDisplayDescription(!displayDescription)
        }



    return (
        <div className="single-exercise">
            <h2> {exercise.name} </h2>
            
                <button className="modalButton" onClick={handleDisplayDescription}> How do i do that? </button> 
                {displayDescription && <ExerciseDescriptionPopup exerciseName={exercise.name} exerciseInstruction={exercise.instructions} closeModal={handleDisplayDescription}/>}


            <br></br>
            <button> Add to a programme </button>
        </div>
    )
}

export default SingleExercise;


