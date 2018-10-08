import { SCHOOL_ACADEMIC_DATA_FAILURE, SCHOOL_ACADEMIC_DATA_SUCCESS, SCHOOL_ACADEMIC_DATA, SCHOOL_CURRICULUM, SCHOOL_CURRICULUM_SUCCESS, SCHOOL_CURRICULUM_ERROR, SCHOOL_SYSTEMS, SCHOOL_SYSTEMS_SUCCESS, SCHOOL_SYSTEMS_FAILURE, SCHOOL_ACADEMIC_DETAILS, SCHOOL_ACADEMIC_DETAILS_SUCCESS, SCHOOL_ACADEMIC_DETAILS_FAILURE, ARA_DETAILS, ARA_DETAILS_SUCCESS, ARA_DETAILS_FAILURE, SCHOOL_ACADEMIC_YEAR_SUCCESS, SCHOOL_ACADEMIC_YEAR_FAILURE, SCHOOL_ACADEMIC_YEAR, GET_COUNTRIES, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_FAILURE, GET_TAX_CURRENCY, GET_TAX_CURRENCY_SUCCESS, GET_TAX_CURRENCY_FAILURE } from '../Actions/Index';
import { ACADEMIC_YEARS_SUCCESS, ACADEMIC_YEARS, ACADEMIC_YEARS_FAILURE } from '../Actions/Common';

var intialState = {
	loading:true,
	systemsLoading:true,
	araLoading:true,
	detailsSchool:null,
	acaYearsLoading:true,
	acaYearDataloading:true,
	countriesLoading:true,
	taxLoading:true
}

export default function ( state = intialState, action) {
	switch(action.type) {
		case SCHOOL_ACADEMIC_DATA:
		return { ...state, loading:true, error:null};
		break;
		case SCHOOL_ACADEMIC_DATA_SUCCESS:
		return { ...state, loading:false, academic_year:action.payload.data}
		break;
		case SCHOOL_ACADEMIC_DATA_FAILURE:
		return action;
		break; 
		case SCHOOL_CURRICULUM:
		return{ ...state, loading:true, error:null};
		break;
		case SCHOOL_CURRICULUM_SUCCESS:
		return{ ...state, loading:false, curriculum:action.payload.data};
		break;
		case SCHOOL_CURRICULUM_ERROR:
		return action;
		break;
		case SCHOOL_SYSTEMS:
		return{ ...state, systemsLoading:true, error:null};
		break;
		case SCHOOL_SYSTEMS_SUCCESS:
		return{ ...state, systemsLoading:false, systems:action.payload.data};
		break;
		case SCHOOL_SYSTEMS_FAILURE:
		return action;
		break;
		case SCHOOL_ACADEMIC_DETAILS:
		return { ...state, detailsLoading:true, error:null};
		break;
		case SCHOOL_ACADEMIC_DETAILS_SUCCESS:
		return { ...state, detailsLoading:false, academic_details:action.payload.data}
		break;
		case SCHOOL_ACADEMIC_DETAILS_FAILURE:
		return action;
		break; 
		case ARA_DETAILS:
		return { ...state, araLoading:true, error:null};
		break;
		case ARA_DETAILS_SUCCESS:
		return { ...state, araLoading:false, regulatory:action.payload.data}
		break;
		case ARA_DETAILS_FAILURE:
		return action;
		break;
		case ACADEMIC_YEARS:
		return { ...state, acaYearsLoading:true, error:null}
		break;
		case ACADEMIC_YEARS_SUCCESS:
		return { ...state, acaYearsLoading:false, acaYearsInfo:action.payload.data}
		break;
		case ACADEMIC_YEARS_FAILURE:
		return action;
		break;
		case SCHOOL_ACADEMIC_YEAR:
		return { ...state, acaYearDataloading:true, error:null}
		break;
		case SCHOOL_ACADEMIC_YEAR_SUCCESS:
		return { ...state, acaYearDataloading:false, acaYearData:action.payload.data}
		break;
		case SCHOOL_ACADEMIC_YEAR_FAILURE:
		return action;
		break;
		case GET_COUNTRIES:
		return { ...state , countriesLoading:true, error:null}
		break;
		case GET_COUNTRIES_SUCCESS:
		return { ...state , countriesLoading:false, countries:action.payload}
		break;
		case GET_COUNTRIES_FAILURE:
		return action;
		break;
		case GET_TAX_CURRENCY:
		return { ...state , taxLoading:true, error:null}
		break;
		case GET_TAX_CURRENCY_SUCCESS:
		return { ...state , taxLoading:false, taxAndCurrency:action.payload.data}
		break;
		case GET_TAX_CURRENCY_FAILURE:
		return action;
		break;
		default:
		return state;
	}
}