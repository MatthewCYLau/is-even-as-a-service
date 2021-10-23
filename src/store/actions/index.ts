import { ActionType, UserActionType } from '../action-types';

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

interface User {
    name: string;
    username: string;
    email: string;
}

interface SearchUserAction {
    type: UserActionType.SEARCH_USER;
}

interface SearchUserSuccessAction {
    type: UserActionType.SEARCH_USER_SUCCESS;
    payload: User;
}

interface SearchUserErrorAction {
    type: UserActionType.SEARCH_USER_ERROR;
    payload: string;
}

export type UserAction =
  | SearchUserAction
  | SearchUserSuccessAction
  | SearchUserErrorAction;
