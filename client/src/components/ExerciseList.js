// import FilterExercise from './FilterExercise';
import SingleExercise from './SingleExercise';



const ExerciseList = ({ exercises, setExerciseListings} ) => {
    const exerciseNodes = exercises.map((exercise) => {
        return <SingleExercise key={exercise._id} exercise={exercise}  />
    });

    // const options = [
    //     {type: "Biceps"},
    //     {type: "glutes"}
    // ];


    return (
        <div className="exercise-list">
            <h2>filter options to go here</h2>

            {/* <FilterExercise options={options}/> */}

            <h2>Choose what you want to do:</h2>
                <div className="exercise-wrapper" setExerciseListings = {setExerciseListings}>
                    { exerciseNodes } 
                </div>
                
        </div>
    )
}

export default ExerciseList;