import { API_KEY } from '../env.js';
const baseURL = 'https://api.api-ninjas.com/v1/exercises' 


const ExerciseService = { 
    

    // return random list of exercises from the initial fetch
    randomInitialFetchExercises() {

        // a function that picks a random number betweem 0 and 3402. there are 3412 exercises on the API
        const randomOffsetNumber = () => {
            const randomNumber = Math.floor(Math.random() * 3402);
            return randomNumber;
        };

        const offset = randomOffsetNumber();

        return fetch(`${baseURL}?offset=${offset}`, {
            headers: {'X-Api-Key': API_KEY}
        })
        .then(res => res.json());
    },


    // filtered fetch method that takes inthe values submitted by the users choice in FilterExercise.js
    filteredFetch(selectedType, selectedMuscle, selectedDifficulty) {
        return fetch(`${baseURL}?type=${selectedType}&muscle=${selectedMuscle}&difficulty=${selectedDifficulty}`, 
        { headers: { 'X-Api-Key': API_KEY }})
        .then(response => response.json())
    }
};


export default ExerciseService;



