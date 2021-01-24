import React, {Component} from 'react';

const upload = class upload extends Component{
    constructor(props){
        super(props);

        this.state={};
    };

    componentDidMount(){
        this.setState({})
    }

    render(){
        return (
            <div>
                <br></br><br></br>
                <label for="formFileLg" class="form-label">Upload cheque image</label>
                <input class="form-control form-control-lg" id="formFileLg" type="file"/>
                <a href="/results" class="btn btn-success">Submit</a>
            </div>
        )
    }
}

export default upload;