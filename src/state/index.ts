import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  reducer: persistedReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch();

export default store;
