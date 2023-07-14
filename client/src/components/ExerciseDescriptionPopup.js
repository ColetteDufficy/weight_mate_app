import React from "react"; 
import './ExerciseDescriptionPopup.css';
import OutsideClickHandler from 'react-outside-click-handler'; // dependancy - allows the modal to close once anywhere is clicked outside of modal



const ExerciseDescriptionPopup = ({ exerciseName, exerciseInstruction, closeModal }) => {



    return (
        <div className="modalBackground"> 
            <div className="modalContainer"> 

                <div className="modalBody">
                    <OutsideClickHandler onOutsideClick={closeModal}>
                    <h2>{exerciseName}</h2>
                    <p>{exerciseInstruction}</p>
                    
                    <div className="modalFooter">
                        <a href="https://www.youtube.com/watch?v=sxF9BcDt-yY" target="_blank">
                            <button className="modalFooterButton">video</button></a>

                        <button onClick={closeModal}>close</button>
                    </div>
                    </OutsideClickHandler>
                </div>
            </div>
         </div>
    )
}

export default ExerciseDescriptionPopup;
