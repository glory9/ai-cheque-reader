import React, {Component} from 'react';

// Image Save
import axios from 'axios';

// Image Upload
import ImageUploading from "react-images-uploading";

const upload = class upload extends Component{

    onChange = (imageList) => {
        // data for submit
        
        // Create an object of formData 
        const formData = new FormData(); 
         
        // Update the formData object 
        formData.append( 
          "myFile", 
          imageList[0].file, 
          imageList[0].file.name
        ); 

      // Details of the uploaded file 
      console.log(imageList[0].file); 
   
      // Request made to the backend api 
      // Send formData object to my php file for save in folder
      axios.post("http://localhost:3000/reactimageupload.php", formData); 
    }; 
    
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
                <label for="formFileLg" class="form-label">Please submit check image for validation</label>
                <input class="form-control form-control-lg" id="formFileLg" type="file"/>
                <a href="/results" class="btn btn-success">Submit</a>
{/* 
testing this out                  */}
                <ImageUploading
                onChange={this.onChange}
            >
                {({ imageList, onImageUpload }) => (
                // write your building UI
                <div className="imageuploader">
                    <div className="mainBtns">
                    <button className="btn btn-primary mr-1" onClick={onImageUpload}>Upload Image</button>
                    
                    </div>
                    {imageList.map((image) => (
                    <div className="imagecontainer" key={image.key}>
                        <img src={image.dataURL} />
                        
                    </div>
                    ))}
                </div>
                )}
            </ImageUploading>
                    
            </div>
            
        )
    }
}

export default upload;