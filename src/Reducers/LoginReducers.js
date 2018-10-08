import { SCHOOL_FETCH_SUCCESS, SCHOOL_FETCH_ERROR,
USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE,
SCHOOL_DETAILS_FAILURE, SCHOOL_DETAILS_SUCCESS,SCHOOL_DETAILS } from '../Actions/Index';

var intialState = {
	loading:true,
	items:null,
	schoolDetials:null
}
export default function ( state = intialState, action) {
	switch(action.type) {
		case USER_LOGIN_SUCCESS:
		return {...state, loading:false , items:action.payload};
		break;
		case USER_LOGIN:
		break;
		return {...state , loading:true, error:null};
		case USER_LOGIN_FAILURE:
		return action;
		break;
		case SCHOOL_FETCH_SUCCESS:
		return {...state, loading:false, schools:action.payload};
		break;
		case SCHOOL_FETCH_ERROR:
		return action;
		break;
		case SCHOOL_DETAILS:
		return {...state , loading:true, error:null};
		break;
		case SCHOOL_DETAILS_SUCCESS:
		return { ...state, loading:false, schoolDetials:action.payload.data}
		break;
		case SCHOOL_DETAILS_FAILURE:
		return action;
		break;
		default:
		return state;
	}
}