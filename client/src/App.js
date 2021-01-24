import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from "react-router-dom"


import home from "./components/home/home.component";
import upload from "./components/upload/upload.component";
import results from "./components/results/results.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={home} />
        <Route path="/get-started" component={upload}/>
        <Route path="/results" component={results}/>
      </Router>
    </div>
  );
}

export default App;
