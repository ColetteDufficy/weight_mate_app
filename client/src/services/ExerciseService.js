import { API_KEY } from '../env.js';
// console.log(API_KEY)

const baseURL = 'https://api.api-ninjas.com/v1/exercises';

const shuffleList = (list) => {
    for (let index = list.length - 1; index > 0; index--) {
        const j = Math.floor(Math.random() * (index + 1));
        [list[index], list[j]] = [list[j], list[index]];
    }
    return list;
    };


const ExerciseService = { shuffleList,

    // returns the intial 10 exercises from the API
    getAllExercises() {
        return fetch(baseURL, {
            headers: { 'X-Api-Key': API_KEY },
        })
            .then(res => res.json())
    },

    // return random list of exercises from the API



    randomListOfExercises() {
        return fetch(baseURL, {
            headers: {'X-Api-Key': API_KEY},
        })
        .then(res => res.json())
        .then((data)=> this.shuffleList(data))
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

