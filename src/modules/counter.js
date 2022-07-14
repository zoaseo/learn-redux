// 리덕스 모듈 만들기
// 1. 초기상태선언
// 2. 액션타입선언
// 3. 액션생성함수정의
// 4. 리듀서 선언

// 1. 초기상태선언
const initialState = {
    number: 0,
    diff: 1
}

// 2. 액션타입
// 다른 모듈과 액션 이름이 중복되는 것을 방지(접두사처럼 붙여준다)
const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 3. 액션생성함수선언
// 액션생성함수는 export 키워드를 사용하여 내보내기
export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 4. 리듀서 선언
export default function counter(state=initialState, action){
    switch(action.type){
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            }
        case INCREASE:
            return {
                ...state,
                number: state.number + state.diff
            }
        case DECREASE:
            return {
                ...state,
                number: state.number - state.diff
            }
        default:
            return state;
    }
}