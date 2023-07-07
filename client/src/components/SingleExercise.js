import React, { useState } from "react"
import ExerciseDescription from "./ExerciseDescription"
import ExerciseDescriptionPopup from "./ExerciseDescriptionPopup";


const SingleExercise = ({exercise}) => {
    // console.log(exercise);

        const [displayDescription, setDisplayDescription] = useState(false);

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


//  {/* {displayDescription && <ExerciseDescription exerciseInstruction={exercise.instructions}/>} */}