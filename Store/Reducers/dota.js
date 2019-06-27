import { GET_RANK, GET_RANK_SUCCESS, GET_RANK_FAIL } from "../Actions/actionTypes";

const initialState = {
    loadingRank: false,
    rankError: null,
    rankData: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RANK:
            return {
                ...state,
                rankError:null,
                loadingRank:true,
            }
        case GET_RANK_SUCCESS:
            return {
                ...state,
                loadingRank: false,
                rankError: null,
                rankData: action.rankData,
            }
        case GET_RANK_FAIL:
            return {
                ...state,
                loadingRank: false,
                rankError: action.err,
            }
        default:
            return state;
    }
}

export default reducer;