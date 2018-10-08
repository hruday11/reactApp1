import axios from 'axios';
import * as API from '../Utils/Constants';
import setAuthorizationToken from '../Utils/setAuthToken';
export const DO_LOGIN = 'do_login';
export const USER_LOGIN = 'user_login';
export const USER_LOGIN_SUCCESS = 'user_login_success';
export const USER_LOGIN_FAILURE = 'user_login_failure';
export const SCHOOL_FETCH_SUCCESS = 'school_fetch_success';
export const SCHOOL_FETCH_ERROR = 'school_fetch_error';
export const SCHOOL_DETAILS = 'school_details';
export const SCHOOL_DETAILS_FAILURE = 'school_details_failure';
export const SCHOOL_DETAILS_SUCCESS = 'school_detailgetAcademicYearData_success';
export const SCHOOL_ACADEMIC_DATA_FAILURE = 'school_getAcademicYearDatacademic_data_failure';
export const SCHOOL_ACADEMIC_DATA_SUCCESS = 'school_getAcademicYearDatacademic_data_success';
export const SCHOOL_ACADEMIC_DATA = 'school_academicgetAcademicYearDatadata';
export const SCHOOL_CURRICULUM='school_curriculum';
export const SCHOOL_CURRICULUM_SUCCESS='school_curriculum_success';
export const SCHOOL_CURRICULUM_ERROR='school_curriculum_failure';
export const SCHOOL_SYSTEMS = 'school_systems';
export const SCHOOL_SYSTEMS_SUCCESS = 'school_systems_success';
export const SCHOOL_SYSTEMS_FAILURE = 'school_systems_failure';
export const SCHOOL_ACADEMIC_DETAILS = 'school_academic_details';
export const SCHOOL_ACADEMIC_DETAILS_FAILURE = 'school_academic_data_failure';
export const SCHOOL_ACADEMIC_DETAILS_SUCCESS = 'school_academic_data_success';
export const ARA_DETAILS = 'ara_details';
export const ARA_DETAILS_SUCCESS = 'ara_details_success';
export const ARA_DETAILS_FAILURE = 'ara_details_failure';
export const SCHOOL_ACADEMIC_YEAR = 'school_academic_year';
export const SCHOOL_ACADEMIC_YEAR_SUCCESS = 'school_academic_year_success';
export const SCHOOL_ACADEMIC_YEAR_FAILURE = 'school_academic_year_failure';
export const GET_COUNTRIES = 'get_countries';
export const GET_COUNTRIES_SUCCESS = 'get_countries_success';
export const GET_COUNTRIES_FAILURE = 'get_countries_failure';
export const GET_TAX_CURRENCY = 'get_tax_currency';
export const GET_TAX_CURRENCY_SUCCESS = 'get_tax_currency_success';
export const GET_TAX_CURRENCY_FAILURE = 'get_tax_currency_failure';



export const TOKEN = '';
const ROOT_URL = "http://demo.edufintech.ae/api/";
// const API_KEY = '?key=PAPERCLIP1234';

// export function Login() {
//     return (dispatch) => {
//         dispatch({
//             type: DO_LOGIN
//         })
//         axios.get('https://jsonplaceholder.typicode.com/todos/').then((response) => {
//             dispatch({
//                 type: DO_LOGIN_SUCCESS,
//                 payload: response
//             })
//         }).catch((error) => {
//             return error
//         })
//     }
// };

export function userLogin(values) {
    return (dispatch) => {
        axios.post(`${API.EndPoint.domain}accounts/login-group/`, values).then((response) => {
            sessionStorage.setItem('token', response.data.data.token);
            sessionStorage.setItem('groupData', JSON.stringify(response.data.data));
            setAuthorizationToken(response.data.data.token);
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: response.data
            })
        }).catch((error) => {
            dispatch({
                type: USER_LOGIN_FAILURE,
                payload: error
            })
        })
    }
}

export function getSchoolData(id){
    console.log(id);
   
    return(dispatch =>{
        dispatch({
            type:SCHOOL_DETAILS
        })
        axios.get(`${API.EndPoint.domain}school/schooldetails/${id}/`).then((response)=>{
            console.log(response);
            dispatch({
                type:SCHOOL_DETAILS_SUCCESS,
                payload:response.data
            })
        }).catch((error)=>{
            dispatch({
                type:SCHOOL_DETAILS_FAILURE,
                payload:error
            })
        })
    })
}

export function get(api) {
    const headers = this.requestHeaders();
    return (dispatch) => {
        axios.get(`${ROOT_URL}${api}`).then((res) => {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: res.data
            })
        })
    }
}

export function getSchoolsList (){
    return (dispatch) =>{
    axios.get(`${API.EndPoint.domain}school/listschools/`).then((response) => {
            dispatch({
                type: SCHOOL_FETCH_SUCCESS,
                payload: response.data
            })
        }).catch((error) => {
            dispatch({
                type: SCHOOL_FETCH_ERROR,
                payload: error
            })
        })
    }
}


export function getAcademicYearData(id){
    return(dispatch =>{
        dispatch({
            type:SCHOOL_ACADEMIC_DATA
        })
        axios.get(`${API.EndPoint.domain}school/get-academic-year/${id}/`).then((response)=>{
            dispatch({
                type:SCHOOL_ACADEMIC_DATA_SUCCESS,
                payload:response.data
            })
        }).catch((error)=>{
            dispatch({
                type:SCHOOL_ACADEMIC_DATA_FAILURE,
                payload:error
            })
        })
    })
}

export function getCurriculumData(id){
    return (dispatch=>{
        dispatch({
            type:SCHOOL_CURRICULUM
        })
        axios.get(`${API.EndPoint.domain}groups/schoolcurriculum/${id}`).then((response)=>{
            dispatch({
                type:SCHOOL_CURRICULUM_SUCCESS,
                payload:response.data
            })
        }).catch((error)=>{
                dispatch({
                type:SCHOOL_CURRICULUM_ERROR,
                payload:error
                })
        })
    })
}

export function getSchoolSystems(){
    return(dispatch=>{
        dispatch({
            type:SCHOOL_SYSTEMS
        })
        axios.get(`${API.EndPoint.domain}groups/systems/`).then((response)=>{
            dispatch({
                type:SCHOOL_SYSTEMS_SUCCESS,
                payload:response.data
            })
        }).catch((error)=>{
            dispatch({
                type:SCHOOL_SYSTEMS_FAILURE,
                payload:error
            })
        })
    })
}

export function schoolAcademicDetails(id){
    return (dispatch=>{
        dispatch({
            type:SCHOOL_ACADEMIC_DETAILS
        })
        axios.get(`${API.EndPoint.domain}school/academicdetails/${id}`).then((response)=>{
            dispatch({
                type:SCHOOL_ACADEMIC_DETAILS_SUCCESS,
                payload:response.data
            })
        }).catch((error)=>{
                dispatch({
                type:SCHOOL_ACADEMIC_DETAILS_FAILURE,
                payload:error
                })
        })
    })
}

export function getARAData(id){
    return(dispatch=>{
        dispatch({
            type:ARA_DETAILS
        })
        axios.get(`${API.EndPoint.domain}school/ara/${id}/`).then((response)=>{
            dispatch({
                type:ARA_DETAILS_SUCCESS,
                payload:response.data
            })
        }).catch((error)=>{
            dispatch({
                type:ARA_DETAILS_FAILURE,
                payload:error
            })
        })
    })
}

export function getSchoolAcaYearData(schoolId, acaId){
    return(dispatch =>{
        dispatch({
            type:SCHOOL_ACADEMIC_YEAR
        })
    axios.get(`${API.EndPoint.domain}groups/get-grades/${schoolId}/${acaId}/`).then((response)=>{
        dispatch({
            type:SCHOOL_ACADEMIC_YEAR_SUCCESS,
            payload:response.data
        })
    }).catch((error)=>{
        dispatch({
            type:SCHOOL_ACADEMIC_YEAR_FAILURE,
            payload:error
        })
    })
})
}

export function getCountries(){
    return (dispatch =>{
        dispatch({
            type:GET_COUNTRIES
        })
        axios.get(`http://localhost:3000/countries.json`).then((res)=>{
            dispatch({
                type:GET_COUNTRIES_SUCCESS,
                payload:res.data
            })
        }).catch((error)=>{
            dispatch({
                type:GET_COUNTRIES_FAILURE,
                payload:error
            })
        })
    })
}

export function getTaxAndCurrency(id){
    return (dispatch =>{
        dispatch({
            type:GET_TAX_CURRENCY
        })
        axios.get(`${API.EndPoint.domain}fee-setup/tax-currency-setup/${id}`).then((res)=>{
            dispatch({
                type:GET_TAX_CURRENCY_SUCCESS,
                payload:res.data
            })
        }).catch((error)=>{
            dispatch({
                type:GET_TAX_CURRENCY_FAILURE,
                payload:error
            })
        })
    })
}