import * as dotaActions from './Actions/dota';

export const fetchRank = () => {
    return dispatch => {
        dispatch(dotaActions.getRank());
        const url = "https://api.opendota.com/api/heroStats";
        console.log("发送请求:"+url);
        fetch(url).then(res => res.json()).then(res => {
            if (res) {
                dispatch(dotaActions.getRankSuccess(res));
            }else {
                dispatch(dotaActions.getRankFail("数据为空"));
            }
        }).catch(err=>{
            dispatch(dotaActions.getRankFail(err));
        });
    }
}