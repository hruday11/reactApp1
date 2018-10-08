import React, { Component } from 'react';
import { getAcademicYearData } from '../../Actions/Index';
import { connect } from 'react-redux';
import { Collapse } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';

const Panel = Collapse.Panel;
const dateFormat = 'YYYY-MM-DD';

function onChange(date, dateString) {
    console.log(date, dateString);
  }
class AcademicYear extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    componentDidMount(){
        this.props.getAcademicYearData(this.props.id.id);
    }
    render(){
        const { loading, academicYearData } = this.props;
        if(loading){
            return (
                <div>{console.log(loading)}Loading.....</div>
            )
        }
        return(
            <div>
                <Collapse accordion>
                  {academicYearData.group_academic_details.map((yearData, i)=>{
                   return <Panel header={yearData.value} key={i}>
                               <DatePicker onChange={onChange} defaultValue={moment(yearData.academic_start_date, dateFormat)}/>
                               <DatePicker onChange={onChange} defaultValue={moment(yearData.academic_end_date, dateFormat)}/>
                          </Panel>
                  })}
                  </Collapse>
            </div>
        )
    }
}

function mapStateToProps (state){
    return {
        academicYearData:state.details.academic_year,
        loading:state.details.loading
    }
}

export default connect (mapStateToProps, {getAcademicYearData})(AcademicYear);