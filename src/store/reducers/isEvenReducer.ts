import { Actions } from "../actions";
import { ActionType } from "../action-types";

interface CounterState {
  loading: boolean;
  error: string | null;
  processedNumbers: number[];
  currentNumberIsEven: boolean;
}

const initialState = {
  loading: false,
  error: null,
  processedNumbers: [],
  currentNumberIsEven: false,
};

const reducer = (
  state: CounterState = initialState,
  action: Actions
): CounterState => {
  switch (action.type) {
    case ActionType.CALCULATE_ISEVEN:
      return {
        ...state,
        processedNumbers: [...state.processedNumbers, action.payload.input],
        loading: true,
        error: null,
      };
    case ActionType.CALCULATE_ISEVEN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        currentNumberIsEven: action.payload.isEven,
      };
    case ActionType.CALCULATE_ISEVEN_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default reducer;
