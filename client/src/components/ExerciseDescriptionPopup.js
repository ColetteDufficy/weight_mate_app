import React from "react"; 
import "./ExerciseDescriptionPopup.css";



const ExerciseDescriptionPopup = ({exerciseInstruction, exerciseName, closeModal}) => {



    return (
        <div className="modalBackground"> 
            <div className="modalContainer"> 

                <div className="modalBody">
                    <h2>{exerciseName}</h2>
                    <p>{exerciseInstruction}</p>
                    
                    <div className="modalFooter">
                        <button>video</button>
                        <button onClick={closeModal}>close</button>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default ExerciseDescriptionPopup;
