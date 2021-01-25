import React, {Component} from 'react';

const upload = class upload extends Component{
    constructor(props){
        super(props);

        this.state = {
            uploads: [],
            patterns: [],
            documents: []
          };
    };

    componentDidMount(){
        this.setState({})
    }

    handleChange = (event) => {
        if (event.target.files[0]) {
          var uploads = []
          for (var key in event.target.files) {
            if (!event.target.files.hasOwnProperty(key)) continue;
            let upload = event.target.files[key]
            uploads.push(URL.createObjectURL(upload))
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
                {/*<label for="formFileLg" class="form-label">Please submit check image for validation</label>
                <input class="form-control form-control-lg" id="formFileLg" type="file"/>
                <a href="/results" class="btn btn-success">Submit</a>*/}
            
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
                <button class="btn btn-success">Generate</button>
            </section>
            </div>
        )
    }
}

export default upload;