import { ActionType } from '../action-types';

interface CalculateIsEvenAction {
    type: ActionType.CALCULATER_ISEVEN;
    payload: {
        'input': number;
    }
}

interface CalculateIsEvenSuccessAction {
    type: ActionType.CALCULATER_ISEVEN_SUCCESS;
    payload: {
        'isEven': boolean
    }
}

interface CalculateIsEvenErrorAction {
    type: ActionType.CALCULATER_ISEVEN_ERROR;
    payload: {
        'error': string
    }
}

export type Actions =
  | CalculateIsEvenAction
  | CalculateIsEvenSuccessAction
  | CalculateIsEvenErrorAction;
