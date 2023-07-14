import { API_KEY } from '../env.js';
const baseURL = 'https://api.api-ninjas.com/v1/exercises';


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


    // filtered fetch result that is based on the values submitted by the users choice in FilterExercise.js
    filteredFetch(selectedType, selectedMuscle, selectedDifficulty) {
        return fetch(`${baseURL}?type=${selectedType}&muscle=${selectedMuscle}&difficulty=${selectedDifficulty}`, 
        { headers: { 'X-Api-Key': API_KEY }})
        .then(response => response.json())
    }
};


export default ExerciseService;






// // ORIGINAL FETCH CODE
// import { API_KEY } from '../env.js';
// // console.log(API_KEY)

// const baseURL = 'https://api.api-ninjas.com/v1/exercises';

// const getAllExercises = () => {
//     return fetch(baseURL, {
//         headers: { 'X-Api-Key': API_KEY },
//     })
//         .then(res => res.json())
// }

// export default getAllExercises;



// a function created to 'shuffle' the data thats retuerned from the fetch
// const shuffleList = (list) => {
//     for (let index = list.length - 1; index > 0; index--) {
//         const randomIndexPosition = Math.floor(Math.random() * (index + 1));
//         [list[index], list[randomIndexPosition]] = [list[randomIndexPosition], list[index]];
//     }
//     return list;
// };



//     // returns the intial 10 exercises from the API
//     getAllExercises() {
//         return fetch(baseURL, {
//             headers: { 'X-Api-Key': API_KEY },
//         })
//             .then(res => res.json());
//     },



//     // return random list of exercises from the API
//     randomListOfExercises() {
//         return fetch(baseURL, {
//             headers: {'X-Api-Key': API_KEY},
//         })
//         .then(res => res.json())
//         .then((data) => shuffleList(data))
//     },
