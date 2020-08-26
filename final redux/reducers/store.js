import {createStore} from 'redux';
import { claimReducer } from './reducer.js';
const initialState = {
    claims:[]
}

export const store = createStore(claimReducer, initialState);