import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAcademicYearList } from '../../Actions/Common';
import { getSchoolAcaYearData } from '../../Actions/Index';

class YearsCapacity extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getAcademicYearList('getAcaData', this.props.yearsData.id);
    }
    render(){
        const { loading, yearsInfo, yearDataloading, academicYearsData} = this.props; 
        if(yearDataloading){
            return <div>{console.log(yearDataloading)}Loading...</div>
        }
        return(
            <div>
                Years/Capacity
                <div>
                   <ul>
                    {academicYearsData.map((data, i)=>{
                        console.log(data);
                       return (
                       <ul key={i}><h4>{data.phase}</h4>
                       {data.grades.map((data1)=>{
                           return ( <li key={data1.id}>{data1.disable} {data1.grade_name}</li>)
                       })}
                       </ul>
                    )
                    })}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state){
    return{
        yearsInfo:state.details.acaYearsInfo,
        loading:state.details.acaYearsLoading,
        yearDataloading:state.details.acaYearDataloading,
        academicYearsData:state.details.acaYearData
    }
}

export default connect(mapStateToProps, {getAcademicYearList, getSchoolAcaYearData})(YearsCapacity);