import { computerVision, isConfigured as ComputerVisionIsConfigured } from './computervision';
import React, {Component} from 'react';
import AWS from 'aws-sdk';
import fs from 'fs';


var upload = class upload extends Component{
    constructor(props){
        super(props);

        this.state = {
            uploads: [],
            patterns: [],
            documents: [],
            fileSelected: null,
            analysis: null,
            processing: false
          };
    };

    componentDidMount(){
        this.setState({})
    }

    fs = require('fs');
    uploadFunc = function (file) {
    fs.readFile(file.path, function (err, data) {
        if (err) throw err; // Something went wrong!
        var s3bucket = new AWS.S3({params: {Bucket: 'checkreaderbucket'}});
        s3bucket.createBucket(function () {
            var params = {
                Key: file.originalFilename,
                Body: data
            };
            s3bucket.upload(params, function (err, data) {
                // Whether there is an error or not, delete the temp file
                fs.unlink(file.path, function (err) {
                    if (err) {
                        console.error(err);
                    }
                    console.log('Temp File Delete');
                });

                console.log("PRINT FILE:", file);
                if (err) {
                    console.log('ERROR MSG: ', err);
                } else {
                    console.log('Successfully uploaded data');

                }
            });
            });
        });
    };



   processUpload = (e) => {
    this.setState({
        fileSelected: e
      })
  }

  onFileUrlEntered = (e) => {

    // hold UI
    this.setState({
        processing: true,
        analysis: null
      })

    computerVision(this.state.fileSelected || null).then((item) => {
      // reset state/form
      this.setState({
        analysis: item,
        fileSelected: "",
        processing: false
      })
    });

  };

    // Display JSON data in readable format
    PrettyPrintJson = (data) => {
      return (<div><pre>{JSON.stringify(data, null, 2)}</pre></div>);
    }
  
    DisplayResults = () => {
      return (
        <div>
          <h2>Computer Vision Analysis</h2>
          <div><img src={this.state.analysis.URL} height="200" border="1" alt={(this.state.analysis.description && this.state.analysis.description.captions && this.state.analysis.description.captions[0].text ? this.state.analysis.description.captions[0].text : "can't find caption")} /></div>
          {this.PrettyPrintJson(this.state.analysis)}
        </div>
      )
    };

    Analyze = () => {
      return (
      <div>
        {!this.state.processing}
        {this.state.processing && <div>Processing</div>}
        <hr />
        {this.state.analysis && this.DisplayResults()}
        </div>
      )
    }
    
     CantAnalyze = () => {
      return (
        <div>Key and/or endpoint not configured in ./azure-cognitiveservices-computervision.js</div>
      )
    }
    Render = () => {
      var ready = ComputerVisionIsConfigured();
      if (ready) {
        return <this.Analyze />;
      }
      return <this.CantAnalyze />;
    }

    handleChange = (event) => {
        if (event.target.files[0]) {
          var uploads = []
          for (var key in event.target.files) {
            if (!event.target.files.hasOwnProperty(key)) continue;
            let upload = event.target.files[key]
            //this.uploadFunc(upload);
            let dynamicImageURL = URL.createObjectURL(upload);

            this.processUpload(dynamicImageURL.slice(5,));
            uploads.push(dynamicImageURL);
          }
          this.setState({
            uploads: uploads
          })
        } else {
          this.setState({
            uploads: []
          })
        }
      }

    render(){
        return (
            <div>
                <br></br><br></br>
                <div>
                {this.Render()}
                </div>
            
            <br></br><br></br>
            { /* File uploader */ }
            <section className="hero">
                <label className="fileUploaderContainer">
                    Click here to upload documents
                    <input type="file" id="fileUploader" onChange={this.handleChange} />
                </label>

                <div>
                    { this.state.uploads.map((value, index) => {
                        return <img key={index} src={value} width="400px" alt="upload"/>
                    })}
                </div>
                <br></br><br></br>
                <button onClick={this.onFileUrlEntered} class="btn btn-success">Generate</button>

            </section>
            </div>
            
        )
    }
}

export default upload;

