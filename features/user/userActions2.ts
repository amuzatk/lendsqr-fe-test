import { Dispatch } from 'redux';

// Import your User and generateMockData types
import { User } from '../../interfaces/index';
import { generateMockData } from './userActions';

// Create a function for data fetching
export const fetchUserData = async (): Promise<User[]> => {
    try {
      const data = await generateMockData(); // Replace with your actual data fetching logic
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  // Action types
  const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
  const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
  
  // Action creators
  const fetchUsersSuccess = (data: User[]) => ({
    type: FETCH_USERS_SUCCESS,
    payload: data,
  });
  
  const fetchUsersFailure = (error: any) => ({
    type: FETCH_USERS_FAILURE,
    payload: error,
  });
  
  // Async action creator
  export const fetchUsers = () => async (dispatch: Dispatch) => {
    try {
      const data = await fetchUserData();
      dispatch(fetchUsersSuccess(data));
    } catch (error) {
      dispatch(fetchUsersFailure(error));
    }
  };
  