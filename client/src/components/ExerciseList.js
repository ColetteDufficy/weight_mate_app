import SingleExercise from "./SingleExercise";

const ExerciseList = ({ exercises} ) => {
    const exerciseNode = exercises.map((exercise) => {
        return <SingleExercise exercise={exercise} />
    });

    return (
        <div className="exercise-list">
            <h2>Exercise List</h2>
                <div className="exercise-wrapper">
                    { exerciseNode }
                </div>
        </div>
    )
}

export default ExerciseList;