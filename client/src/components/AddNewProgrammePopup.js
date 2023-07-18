import React from "react";
import './ExerciseDescriptionPopup.css';
import OutsideClickHandler from 'react-outside-click-handler'; 


const AddNewProgrammePopup = ({closeProgrammeModal}) => {

    return (
        <div className="modalBackground"> 
            <div className="modalContainer"> 

                <div className="modalBody">
                    <OutsideClickHandler onOutsideClick={closeProgrammeModal}>
                    <h2>hello there</h2>

                    <div className="modalFooter">
                            <button className="modalFooterButton" onClick={closeProgrammeModal}>close</button>
                    </div>
                    </OutsideClickHandler>
                </div>
            </div>
         </div>
    )



};

export default AddNewProgrammePopup;