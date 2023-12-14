  // features/user/userSlice.ts
  
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { User } from '../../interfaces/index';
  
  interface UserState {
    data: User[];
    loading: boolean;
    error: string | null;
  }
  
  const initialState: UserState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      fetchUsersStart(state) {
        state.loading = true;
        state.error = null;
      },
      fetchUsersSuccess(state, action: PayloadAction<User[]>) {
        state.loading = false;
        state.data = action.payload;
      },
      fetchUsersFailure(state, action: PayloadAction<string>) {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  
  export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } = userSlice.actions;
  export default userSlice.reducer;
  