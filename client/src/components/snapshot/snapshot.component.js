import React, {Component} from 'react';
import "./snapshot.css"
import camera from './camera.js';

const snapshot = class snapshot extends Component{
    constructor(props){
        super(props);

        this.state={};
    };

    componentDidMount(){
        this.setState({})
    }

    render(){
        camera.startCamera();
        
        return (
            <div id="canvasContainer">
                <br></br><br></br>
                <br></br>
                <a href="/results" class="btn btn-success">Submit</a>
                <button class="btn btn-secondary" formAction="camera.takeSnapshot()">Capture</button>
                
            </div>
        )
    }
}

export default snapshot;