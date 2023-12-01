// // features/user/userActions.ts

// import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } from './userSlice';
// import axios from '../../lib/axioConfig';

// export const fetchUsers = () => async (dispatch: any) => {
//   try {
//     dispatch(fetchUsersStart());
//     const response = await axios.get('/users');
//     dispatch(fetchUsersSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchUsersFailure('Error fetching users'));
//   }
// };

// userActions.ts

import { AnyAction } from 'redux';
import axios from '../../lib/axiosConfig';
import { User } from '../../interfaces/index';

export const fetchUsers = (): Promise<User[]> => {
  return axios.get('/users')
    .then((response) => response.data)
    .catch((error) => {
      throw new Error('Error fetching users');
    });
};
