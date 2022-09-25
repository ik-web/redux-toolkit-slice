const NUM_PLUS = 'NUM_PLUS';
const NUM_MINUS = 'NUM_MINUS';

const initialState = {
  counter: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NUM_PLUS:
      return {
        ...state,
        counter: state.counter + 1
      };

    case NUM_MINUS:
      if( state.counter > 0) {
        return {
          ...state,
          counter: state.counter - 1
        };

      }

      return state;

    default:
      return state
  }
};

export const plus = () => ({ type: NUM_PLUS });
export const minus = () => ({ type: NUM_MINUS });
