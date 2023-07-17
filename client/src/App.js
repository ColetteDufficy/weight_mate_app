import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExerciseContainer from './containers/ExerciseContainer';




function App() {

    return (
        <div className="App">
            <h1>Welcome to Weight Mate</h1>
            <ExerciseContainer />
        </div>
    );
}

export default App;



