// // index.ts
// import { combineReducers } from 'redux';
// import userReducer from './userReducer';

// const rootReducer = combineReducers({
//   users: userReducer,
// });

// export default rootReducer;

// // Assuming you have a rootReducer that combines different reducers
// import { combineReducers } from 'redux';
// import userReducer from './userReducer';

// const rootReducer = combineReducers({
//   users: userReducer,
//   // Add other reducers as needed
// });

// export type RootState = ReturnType<typeof rootReducer>;

// reducers/index.ts
import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  users: userReducer,
  // Add other reducers as needed
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;