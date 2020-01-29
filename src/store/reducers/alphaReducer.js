import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux';



const alphaReducer = combineReducers
    ({auth: authReducer,
    project: projectReducer
})
export default alphaReducer