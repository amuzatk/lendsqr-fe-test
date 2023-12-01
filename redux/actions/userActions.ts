// userActions.ts
import { Dispatch } from 'redux';
import axios from 'axios';
import { User } from '../../interfaces/index';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });

    try {
        // const response = await axios.get<User[]>('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: response.data,
      });

      console.log('Fetched Users:', response.data);
    } catch (error) {
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: error.message,
      });
    }
  };
};


// import { Dispatch } from 'redux';
// import { AnyAction } from 'redux'; // Import AnyAction from redux
// import axios from 'axios';
// import { User } from '../../interfaces/index';

// export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
// export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
// export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// export const fetchUsers = () => {
//   return async (dispatch: Dispatch<AnyAction>) => {
//     dispatch({ type: FETCH_USERS_REQUEST });

//     try {
//       const response = await axios.get<User[]>('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
//       dispatch({
//         type: FETCH_USERS_SUCCESS,
//         payload: response.data,
//       });

//       console.log('Fetched Users:', response.data);
//     } catch (error) {
//       dispatch({
//         type: FETCH_USERS_FAILURE,
//         payload: error.message,
//       });
//     }
//   };
// };