
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import quizReducer from './quizSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    quiz: quizReducer,
  },
});

// Export types for TypeScript usage
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
