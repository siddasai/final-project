import { ClaimList } from './actionTypes.js'

export const claimList = claims =>{
    return {
        type : ClaimList,
        payload : claims
    }
}