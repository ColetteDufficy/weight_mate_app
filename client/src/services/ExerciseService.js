import { API_KEY } from '../env.js';
// console.log(API_KEY)

const baseURL = 'https://api.api-ninjas.com/v1/exercises';

export const getAllExercises = () => {
    return fetch(baseURL, {
        headers: { 'X-Api-Key': API_KEY },
    })
        .then(res => res.json())
}