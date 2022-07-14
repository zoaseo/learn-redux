import { createStore } from "redux";

// 1. 상태초기값 설정
// 2. 액션 타입 선언
// 3. 액션 생성함수 정의
// 4. reducer 정의
// 5. store 생성

// 1. 리덕스에서 관리할 상태 정의
const initialState = {
    counter: 0,
    text: '',
    list: [],
}
// 2. 액션 타입 선언
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 3. 액션 생성함수 정의
const increase = () => {
    return {
        type: INCREASE,
    }
}
const decrease = () => ({
    type: DECREASE,
})
const changeText = (text) => ({
    type: CHANGE_TEXT,
    text
})
const addToList = (item) => ({
    type: ADD_TO_LIST,
    item
})

// 4. 리듀서 만들기
function reducer(state = initialState, action){
    switch(action.type){
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            }
        default:
            return state;
    }
}
// 5. 스토어 만들기
const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
    const state = store.getState();
    console.log(state);
}

const unsubscribe = store.subscribe(listener);

// 6. 액션 디스패치 해보기
store.dispatch(increase());
// store.dispatch({type: INCREASE}); // 윗줄과 똑같은 의미
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({id: 1, name: "green", age: 20}));
console.log(decrease);