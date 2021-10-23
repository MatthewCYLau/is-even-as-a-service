import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, UserActionType } from "../action-types";
import { Action, UserAction } from "../actions";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES
    });

    try {
      const { data } : any = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term
          }
        }
      );
      const names = data.objects.map((result: any) => result.package.name);
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message
      });
    }
  };
};

export const searchUser = (userId: string = "1") => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.SEARCH_USER
    });

    try {
      const { data } : any = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      dispatch({
        type: UserActionType.SEARCH_USER_SUCCESS,
        payload: {
          name: data.name,
          username: data.username,
          email: data.email
        }
      });
    } catch (err) {
      dispatch({
        type: UserActionType.SEARCH_USER_ERROR,
        payload: err.message
      });
    }
  };
};
