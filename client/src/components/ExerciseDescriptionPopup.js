import React, { useState } from "react"; 
const ExerciseDescriptionPopup = ({exerciseInstruction, exerciseName}) => {

    // console.log(exercise)
        // starting by hiding the exercise description, until the button/hyperlink is clicked. Must start as hidden
        // const [displayDescription, setDisplayDescription] = useState(false);

        // const handleDisplayDescription = () => {
        //     setDisplayDescription(!displayDescription)
        // }

    return (
        <div className="modalBackground"> 
            <div className="modalContainer"> 
                <button> X </button>

                <div className="modalBody">
                    <h2>{exerciseName}</h2>
                    <p>{exerciseInstruction}</p>
                    
                    <div className="modalFooter">
                        <button>video</button>
                        <button>close</button>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default ExerciseDescriptionPopup;
