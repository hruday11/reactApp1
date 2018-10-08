import React, { Component } from 'react';

class Basic extends Component{
    constructor(props){
        super(props);
        this.state = {details:this.props.basicData};
    }
    render(){
        if(this.state.details === null){
            return (
                <div>Loading....</div>
            )
        }
        return(
            <div>
                {console.log(this.state)}
                {this.state.details.acronym}
            </div>
        )
    }
}


export default Basic;