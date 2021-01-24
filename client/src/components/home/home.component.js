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
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                    </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://picsum.photos/500/250" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/500/250" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://picsum.photos/500/250" class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
                </div>

                <div class="card text-center" >
                    <div class="card-body">
                        <h5 class="card-title">Check Reader</h5>
                        <p class="card-text">Submit your check for validation</p>
                        <a href="/get-started" class="btn btn-primary">Get Started/Begin New Transaction</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default home;