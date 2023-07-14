import { API_KEY } from '../env.js';
// console.log(API_KEY)

const baseURL = 'https://api.api-ninjas.com/v1/exercises';


// a function created to 'shuffle' the data thats retuerned from the fetch
const shuffleList = (list) => {
    for (let index = list.length - 1; index > 0; index--) {
        const randomIndexPosition = Math.floor(Math.random() * (index + 1));
        [list[index], list[randomIndexPosition]] = [list[randomIndexPosition], list[index]];
    }
    return list;
};

// a function that picks a random number betweem 0 and 3402
// const randomOffsetNumber = () => {
//     const randomNumber = Math.floor(Math.random() * 3402);
//     return randomNumber;
// };


const ExerciseService = { 
    
    // returns the intial 10 exercises from the API
    getAllExercises() {
        return fetch(baseURL, {
            headers: { 'X-Api-Key': API_KEY },
        })
            .then(res => res.json());
    },



    // return random list of exercises from the API
    randomListOfExercises() {
        return fetch(baseURL, {
            headers: {'X-Api-Key': API_KEY},
        })
        .then(res => res.json())
        .then((data) => shuffleList(data))
    },


    // return random list of exercises from the initial fetch
    randomInitialFetchExercises() {

        const randomOffsetNumber = () => {
            const randomNumber = Math.floor(Math.random() * 3402);
            return randomNumber;
        };

        const offset = randomOffsetNumber();


        return fetch(`https://api.api-ninjas.com/v1/exercises?offset=${offset}`, {
            headers: {'X-Api-Key': API_KEY}
        })
        .then(res => res.json());
    }


    // fetch(`https://api.api-ninjas.com/v1/exercises?type=${selectedType}&muscle=${selectedMuscle}&difficulty=${selectedDifficulty}`, 
    // { headers: { 'X-Api-Key': API_KEY }})
    // .then(response => response.json())
    // .then(data => {
    //     console.log("data from filter search", data);


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

