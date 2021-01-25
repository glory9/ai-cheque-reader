import React, {Component} from 'react';

const home = class home extends Component{
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
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://picsum.photos/1000/250" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://picsum.photos/1000/250" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://picsum.photos/1000/250" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                </div>

                <div class="card text-center" >
                    <div class="card-body">
                        <h3 class="card-title"><b>AI Check Reader</b></h3>
                        <h4 class="card-text">Submit your check for validation</h4>
                        <br/>
                        <a href="/get-started" class="btn btn-primary btn-lg">Begin New Transaction</a>
                    </div>
                </div>
            </div>

            
        )
    }
}

export default home;