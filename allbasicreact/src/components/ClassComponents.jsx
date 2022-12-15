import React  from "react";

import { Component } from "react";

class ClassComponents extends Component {
    constructor(props){
        super(props);

        this.state={
            name:"praveen",
            age:25
        };
        // this.buttonHandler=this.buttonHandler.bind(this);
    }
buttonHandler(){
    console.log(this.state.name)
    this.setState({name:this.props.name},()=>{
        console.log(this.state.name)
    });
    
}
    render(){

        return <div>
        <h1>hello world {this.props.name}</h1>
        <button onClick={this.buttonHandler.bind(this)}>click me</button>
        </div>
    }

};
export default ClassComponents

   
