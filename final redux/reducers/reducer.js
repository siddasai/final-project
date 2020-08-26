import { ClaimList } from '../actions/actionTypes.js'

export const claimReducer = (state,action) =>{

    switch(action.type){
        case ClaimList : 
            state = action.payload;
    }
    return state;
};