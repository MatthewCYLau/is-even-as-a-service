import { UserAction } from "../actions";
import { UserActionType } from "../action-types";

interface UserState {
  loading: boolean;
  error: string | null;
  user: User;
}

interface User {
  name: string;
  username: string;
  email: string;
}

const initialState = {
  loading: false,
  error: null,
  user: {
    name: "",
    username: "",
    email: ""
  }
};

const reducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.SEARCH_USER:
      return {
        loading: true,
        error: null,
        user: {
          name: "",
          username: "",
          email: ""
        }
      };
    case UserActionType.SEARCH_USER_SUCCESS:
      return {
        loading: false,
        error: null,
        user: {
          name: action.payload.name,
          username: action.payload.username,
          email: action.payload.email
        }
      };
    case UserActionType.SEARCH_USER_ERROR:
      return {
        loading: false,
        error: action.payload,
        user: {
          name: "",
          username: "",
          email: ""
        }
      };
    default:
      return state;
  }
};

export default reducer;
