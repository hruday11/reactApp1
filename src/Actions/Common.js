import axios from 'axios';
import * as API from '../Utils/Constants';
import { getSchoolAcaYearData } from './Index';

export const ACADEMIC_YEARS = 'academic_years';
export const ACADEMIC_YEARS_SUCCESS = 'academic_years_success';
export const ACADEMIC_YEARS_FAILURE = 'academic_years_failure';

export function getAcademicYearList (data, id){
    return(dispatch=>{
    dispatch({
        type:ACADEMIC_YEARS
    })
    axios.get(`${API.EndPoint.domain}groups/academic-years/`).then((response)=>{
        dispatch({
            type:ACADEMIC_YEARS_SUCCESS,
            payload:response.data
        })
        if(data='getAcaData'){
            console.log(response.data.data[0].id, id);
            dispatch(getSchoolAcaYearData(id, response.data.data[0].id))
        }
    }).catch((error)=>{
        dispatch({
            type:ACADEMIC_YEARS_FAILURE,
            payload:error
        })
    })
})
}
