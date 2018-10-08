import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getARAData } from '../../Actions/Index' 

class Regulatory extends Component{
    constructor(props){
        super(props);
        this.state = {regulatory:this.props.regulatory}
    }
    componentDidMount(){
        this.props.getARAData(this.props.regulatory.id);
    }
    
    render(){
        const { loading, regulatoryData } = this.props;
        if(loading){
            return (
                <div>{console.log(loading)}Loading...</div>
            )
        }
        return (
            <div>{console.log(regulatoryData)}
            <h4>Accreditation</h4>
            {regulatoryData.accreditation.map((accD)=>{
                  return (
                    <div  key={accD.id}>
                       <p>{accD.description}</p>
                       <img src={accD.image}></img>
                    </div>
                    )
            })}
            <h4>Affiliation</h4>
             {regulatoryData.affiliation.map((affD)=>{
                  return (
                    <div  key={affD.id}>
                       <p>{affD.description}</p>
                       <img src={affD.image}></img>
                    </div>
                    )
            })}
            <div>
            <h4>Regulatory</h4>
             {regulatoryData.regulatory.map((regD)=>{
                 return (
                <div  key={regD.id}>
                   <p>{regD.description}</p>
                   <img src={regD.image}></img>
                </div>
                )
            })}
            </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        regulatoryData:state.details.regulatory,
        loading:state.details.araLoading

    }
}

export default connect(mapStateToProps, {getARAData})(Regulatory);


