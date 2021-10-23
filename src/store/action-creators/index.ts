import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Actions } from '../actions';

export const calculateIsEven = (inputNumber: number) => async (dispatch: Dispatch<Actions>) => {
    dispatch({
        type: ActionType.CALCULATER_ISEVEN,
        payload: {
            input: inputNumber
        }
    });

    try {
        const isEven = inputNumber % 2 === 0;
        dispatch({
            type: ActionType.CALCULATER_ISEVEN_SUCCESS,
            payload: {
                isEven
            }
        });
    } catch (err) {
        dispatch({
            type: ActionType.CALCULATER_ISEVEN_ERROR,
            payload: err.message
        });
    }
};
