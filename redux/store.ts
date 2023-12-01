// // store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import rootReducer from './reducer';

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [thunk],
//   // Add other middleware or enhancers as needed
// });

// export default store;

// store.ts
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducer'; // Assuming your rootReducer is in a directory named 'reducers'

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  // Add other middleware or enhancers as needed
});

export default store;
