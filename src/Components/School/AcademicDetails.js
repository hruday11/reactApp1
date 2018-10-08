import  React, { Component } from 'react';
import {connect} from 'react-redux';
import {getCurriculumData, getSchoolSystems, schoolAcademicDetails} from '../../Actions/Index';
import { Menu, Dropdown, Button, Icon } from 'antd';

function handleMenuClick(e) {
    console.log('click', e);
  }

class AcademicDetails extends Component{
    constructor(props){
        super(props);
        this.state = {groupData:JSON.parse(sessionStorage.getItem('groupData')), academicSystems:this.props.systemDetails};
    }
    componentDidMount(){
        this.props.getCurriculumData(this.state.groupData.user.group_id);
        this.props.getSchoolSystems();
        this.props.schoolAcademicDetails(this.state.academicSystems.id);
        console.log(this.state.academicSystems);
    }
    render(){
        const {loading, curriculumData, systemsData, academicDetailsData,
            systemsLoading, detailsLoading} = this.props;

        if(loading || systemsLoading || detailsLoading){
            return(
                <div>Loading...</div>
            )
        }
        return(
            <div>
                     <Dropdown overlay={
                        <Menu onClick={handleMenuClick}>
                        {curriculumData.map((data)=>{
                          return <Menu.Item key={data.id}><Icon type="user" />{data.curriculum}</Menu.Item>
                        })}
                        </Menu>
                        }>
                    <Button style={{ marginLeft: 8 }}>
                      Button <Icon type="down" />
                    </Button>
                  </Dropdown>
                  <ul>
                      {systemsData.map((data)=>{
                          return <li key={data.id}>{data.system_name}</li>
                      })}
                  </ul>
                  {console.log(academicDetailsData)}
                  <Dropdown overlay={
                        <Menu onClick={handleMenuClick}>
                        {academicDetailsData.grades[1].map((data)=>{
                          return <Menu.Item key={data.id}><Icon type="user" />{data.grade_name}</Menu.Item>
                        })}
                        </Menu>
                        }>
                    <Button style={{ marginLeft: 8 }}>
                      Grade From  <Icon type="down" />
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={
                        <Menu onClick={handleMenuClick}>
                        {academicDetailsData.grades[2].map((data)=>{
                          return <Menu.Item key={data.id}><Icon type="user" />{data.grade_name}</Menu.Item>
                        })}
                        </Menu>
                        }>
                    <Button style={{ marginLeft: 8 }}>
                      Grade To  <Icon type="down" />
                    </Button>
                  </Dropdown>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        curriculumData:state.details.curriculum,
        loading:state.details.loading,
        systemsData:state.details.systems,
        systemsLoading:state.details.systemsLoading,
        detailsLoading:state.details.detailsLoading,
        academicDetailsData:state.details.academic_details
    }
}
export default connect (mapStateToProps,{getCurriculumData, getSchoolSystems, schoolAcademicDetails})(AcademicDetails);