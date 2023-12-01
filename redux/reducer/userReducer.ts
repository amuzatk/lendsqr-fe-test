// // userReducer.ts
// import {
//     FETCH_USERS_REQUEST,
//     FETCH_USERS_SUCCESS,
//     FETCH_USERS_FAILURE,
// } from '../actions/userActions';

  
//   interface UserState {
//     users: any[]; 
//     loading: boolean;
//     error: string | null;
//   }
  
//   const initialState: UserState = {
//     users: [],
//     loading: false,
//     error: null,
//   };
  
//   const userReducer = (state = initialState, action: any) => {
//     switch (action.type) {
//       case FETCH_USERS_REQUEST:
//         return {
//           ...state,
//           loading: true,
//           error: null,
//         };
//       case FETCH_USERS_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           users: action.payload,
//         };
//       case FETCH_USERS_FAILURE:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default userReducer;
  

// userReducer.ts
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../actions/userActions';
import { User } from '../../interfaces/index';

// Define action types
interface FetchUsersRequestAction {
  type: typeof FETCH_USERS_REQUEST;
}

interface FetchUsersSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  payload: User[];
}

interface FetchUsersFailureAction {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
}

// Define a union type for all possible actions
type UserActionTypes =
  | FetchUsersRequestAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction;

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;