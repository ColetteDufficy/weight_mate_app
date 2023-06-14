import SingleExercise from "./SingleExercise";


const ExerciseList = ({ exercises} ) => {
    const exerciseNode = exercises.map((exercise) => {
        return <SingleExercise exercise={exercise} />
    });

    return (
        <div className="exercise-list">
            <h2>Full List of Exercises</h2>
                <div className="exercise-wrapper">
                    { exerciseNode }

                </div>
        </div>
    )
}

export default ExerciseList;