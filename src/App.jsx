import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { minus, plus } from './vanilaStore/reducer';
// import { minus, plus } from './tookitStore/toolkitReducer';
import { minus, plus } from './toolkitStore/toolkitSlice';

const asyncPlus = () => {
  return async dispatch => {
    setTimeout(() => {
      dispatch(plus('ASYNC_PLUS'))
    }, 2000)
  }
};

const App = () => {
  // const counter = useSelector(state => state.reducer.counter);
  const counter = useSelector(state => state.toolkit.counter);
  const dispatch = useDispatch();

  return (
    <div className='app'>
      <div className='section'>
        <div className='counter'>
          {counter}
        </div>

        <div className='buttons'>
          <button onClick={() => dispatch(plus())}>num++</button>
          <button onClick={() => dispatch(minus())}>num--</button>
        </div>

        <button
          className='async-btn'
          onClick={() => dispatch(asyncPlus())}
        >async num++</button>
      </div>
    </div>
  );
};

export default App;
