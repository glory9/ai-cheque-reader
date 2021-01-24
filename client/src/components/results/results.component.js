import React, {Component} from 'react';

const results = class results extends Component{
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
                <div class="card" >
                    <p class="card-header">Here's your validated check details</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Name: Rahmana Muhammed</li>
                        <li class="list-group-item">Amount: $ 1 000 000 </li>
                        <li class="list-group-item">Date: March 9, 2021</li>
                    </ul>
                </div>
                <br></br>
                <a href="/" class="btn btn-warning">Start Over</a>
            </div>
        )
    }
}

export default results;