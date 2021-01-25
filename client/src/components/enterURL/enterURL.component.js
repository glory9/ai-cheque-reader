import React, { useState } from 'react';
import { computerVision, isConfigured as ComputerVisionIsConfigured } from './computervision';

function EnterURL() {
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
        let parsed = [];
        for  (var item in data.text["readResults"][0]["lines"]){
            parsed.push(data["text"]["readResults"][0]["lines"][item].text)
        }

      return (<div><pre>{parsed.map((value) =>{
          return value + "\n"
      })}</pre></div>);
    }
  
    const DisplayResults = () => {
      return (
        <div>
          <h3>Check Scan Results</h3>
          <div><img src={analysis.URL} height="200" border="1" alt={(analysis.description && analysis.description.captions && analysis.description.captions[0].text ? analysis.description.captions[0].text : "can't find caption")} /></div>
          {PrettyPrintJson(analysis)}
        </div>
      )
    };

    const Analyze = () => {
      return (
      <div>
        <p>Analyze image from URL</p>
        {!processing &&
          <div>
            <div>
              <label>URL</label>
              <input type="text" placeholder="Enter URL or leave empty for random image from collection" size="50" onChange={handleChange}></input>
            </div>
            <button class="btn btn-outline-success" onClick={onFileUrlEntered}>Analyze</button>
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
    </div>
  );
}

export default EnterURL;
