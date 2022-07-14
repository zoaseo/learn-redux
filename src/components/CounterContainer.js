import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';
import Counter from './Counter';

const CounterContainer = () => {
    // useSelector는 리덕스 스토어의 상태를 조회하는 Hook함수
    // store.getState()할 때 결과와 동일함
    const { number, diff } = useSelector(state => (state.counter));
    // {number: 0, diff: 1}
    // useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook함수
    const dispatch = useDispatch();
    // 각 액션을 dispatch하는 함수
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));
    return (
        <div>
            <Counter 
            number={number} 
            diff={diff} 
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
            />
        </div>
    );
};

export default CounterContainer;