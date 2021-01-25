import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route} from "react-router-dom"

import home from "./components/home/home.component";
import options from "./components/options/options.component";
import results from "./components/results/results.component";
import snapshot from "./components/snapshot/snapshot.component";
import upload from "./components/upload/upload.component";

import { computerVision, isConfigured as ComputerVisionIsConfigured } from './computervision';
const URL = "https://drive.google.com/file/d/1eq1P5huMun40za1eVbBcOSeobohxot7c/view";

function App() {
  const [fileSelected, setFileSelected] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleChange = (e) => {
    setFileSelected(e.target.value)
  }

  const onFileUrlEntered = (e) => {

    // hold UI
    setProcessing(true);
    setAnalysis(null);

    computerVision(fileSelected || null).then((item) => {
      // reset state/form
      setAnalysis(item);
      setFileSelected("");
      setProcessing(false);
    });

  };

    // Display JSON data in readable format
    const PrettyPrintJson = (data) => {
      return (<div><pre>{JSON.stringify(data, null, 2)}</pre></div>);
    }
  
    const DisplayResults = () => {
      return (
        <div>
          <h2>Computer Vision Analysis</h2>
          <div><img src={analysis.URL} height="200" border="1" alt={(analysis.description && analysis.description.captions && analysis.description.captions[0].text ? analysis.description.captions[0].text : "can't find caption")} /></div>
          {PrettyPrintJson(analysis)}
        </div>
      )
    };

    const Analyze = () => {
      return (
      <div>
        <h1>Analyze image</h1>
        {!processing &&
          <div>
            <div>
              <label>URL</label>
              <input type="text" placeholder="Enter URL or leave empty for random image from collection" size="50" onChange={handleChange}></input>
            </div>
            <button onClick={onFileUrlEntered}>Analyze</button>
          </div>
        }
        {processing && <div>Processing</div>}
        <hr />
        {analysis && DisplayResults()}
        </div>
      )
    }
    
    const CantAnalyze = () => {
      return (
        <div>Key and/or endpoint not configured in ./azure-cognitiveservices-computervision.js</div>
      )
    }
    function Render() {
      const ready = ComputerVisionIsConfigured();
      if (ready) {
        return <Analyze />;
      }
      return <CantAnalyze />;
    }
  return (
    <div className="App">
      <div>
        {Render()}
      </div>
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
