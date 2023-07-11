import React, { useState } from "react";


const FilterExercise = ({options, setExerciseListings}) => {

    const [type, setType] = useState("");

    const handleChange = (event) => {
        setType(event.target.type)
    };

    return (
        <div>
            <select type={type} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option.type} value={option.type}> {option.type} </option>
                ))}
            </select>
        </div>
    );
  };


export default FilterExercise;






// import React, { useState } from "react";


// const FilterExercise = ({options}) => {

//     const [type, setType] = useState("");

//     const handleChange = (event) => {
//         setType(event.target.type)
//     };

//     return (
//         <div>
//             <select type={type} onChange={handleChange}>
//                 {options.map((option) => (
//                     <option key={option.type} value={option.type}> {option.type} </option>
//                 ))}
//             </select>
//         </div>
//     );
//   };


// export default FilterExercise;




