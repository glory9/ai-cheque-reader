import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from "react-router-dom"


import home from "./components/home/home.component";
import options from "./components/options/options.component";
import results from "./components/results/results.component";
import snapshot from "./components/snapshot/snapshot.component";
import upload from "./components/upload/upload.component";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={home} />
        <Route path="/get-started" component={options}/>
        <Route path="/snapshot" component={snapshot}/>
        <Route path="/upload" component={upload}/>
        <Route path="/results" component={results}/>
      </Router>
    </div>
  );
}

export default App;
