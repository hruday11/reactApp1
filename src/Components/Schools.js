import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getSchoolData} from '../Actions/Index';
import Basic from './School/Basic';
import Contact from './School/Contact';
import AcademicYear from './School/AcademicYears';
import AcademicDetails from './School/AcademicDetails';
import Regulatory from './School/Regulatory';
import TaxCurrency from './School/Tax-Currency';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import YearsCapacity from './School/Years-Capacity';

const TabPane = Tabs.TabPane;
class School extends Component{
    constructor(props){
        super(props);
        this.state = { tabNumber : 1, mode:'left' }
    }

    componentDidMount(){
        const  schoolId = this.props.match.params.id;
        this.props.getSchoolData(schoolId);
    }
    render() {
        const {loading, StateData} = this.props;
        const dispData = StateData?StateData.schoolDetails:null;
        {console.log(loading)}
        if (loading) return <div>Loading...</div>;
    return (
      <div className="row">
        {/* <div className="col-md-4">
         <ul>
             <li>Basic Details</li>
             <li>Contact Details</li>
             <li>Academic Years</li>
             <li>Academic Details</li>
             <li>Regulatory & Affiliation</li>
             <li>Year Group & Capacity</li>
             <li>Tax & Currency</li>
             <li>Admin User</li>
             <li>Colors & Themes</li>
         </ul>
        </div> */}
         <div className="col-md-12">
         <Tabs
          defaultActiveKey="1"
          tabPosition={this.state.mode}
        >
          <TabPane tab="Basic Details" key="1">
          <Basic basicData={StateData}/>
          </TabPane>
          <TabPane tab="Contact Details" key="2">
          <Contact contactData={StateData}/>
          </TabPane>
          <TabPane tab="Academic Years" key="3">
          <AcademicYear id={StateData}/>
          </TabPane>
          <TabPane tab="Academic Details" key="4">
          <AcademicDetails systemDetails={StateData}/>
          </TabPane>
          <TabPane tab="Regulatory & Affiliation" key="5">
          <Regulatory regulatory={StateData}/>
          </TabPane>
          <TabPane tab="Year Group & Capacity" key="6">
          <YearsCapacity yearsData={StateData}/></TabPane>
          <TabPane tab="Tax & Currency" key="7">
          <TaxCurrency taxData={StateData}/></TabPane>
          <TabPane tab="Admin User" key="8">Content of tab 8</TabPane>
          <TabPane tab="Colors & Themes" key="9">Content of tab 9</TabPane>
        </Tabs>
        </div>
      </div>
    );
    }
}

function mapStateToProps (state) {
    return {
      StateData:state.login.schoolDetials,
      loading: state.login.loading,
    }
  }; 
export default connect(mapStateToProps, {getSchoolData})(School);