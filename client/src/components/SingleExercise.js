
const SingleExercise = ({exercise}) => {

    console.log(exercise);

    return (
        <div className="single-exercise">
        <h2>{exercise.name}</h2>
        <p>{exercise.instructions}</p>

        </div>
    )
}

export default SingleExercise;