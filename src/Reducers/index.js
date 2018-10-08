import loginReducers from './LoginReducers';
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import schoolsReducers from './schoolsReducers';


const rootReducer = combineReducers({
    login: loginReducers,
    details:schoolsReducers,
    form: formReducer
});

export default rootReducer;