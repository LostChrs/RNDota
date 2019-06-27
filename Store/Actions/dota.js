import { GET_RANK, GET_RANK_SUCCESS, GET_RANK_FAIL } from './actionTypes';

export const getRank = ()=>{
    return {
        type: GET_RANK,
    }
}
export const getRankSuccess = (rankData)=>{
    return {
        type: GET_RANK_SUCCESS,
        rankData: rankData,
    }
}
export const getRankFail = (err)=>{
    return {
        type: GET_RANK_FAIL,
        err: err,
    }
}