import React, { useState } from "react"
import ExerciseDescription from "./ExerciseDescription"


const SingleExercise = ({exercise}) => {
    // console.log(exercise);

    // starting by hiding the exercise description, until the button/hyperlink is clicked. Must start as hidden
    const [displayDescription, setDisplayDescription] = useState(false);

    const handleDisplayDescription = () => {
        setDisplayDescription(!displayDescription)
    }


    return (
        <div className="single-exercise">
        <h2> {exercise.name} </h2>
        <button onClick={handleDisplayDescription}> Description </button> 
        {displayDescription && <ExerciseDescription exerciseInstruction={exercise.instructions}/>}
        <button> Add to a programme </button>


        </div>
    )
}

export default SingleExercise;