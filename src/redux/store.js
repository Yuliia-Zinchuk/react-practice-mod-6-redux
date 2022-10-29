// import { createStore, combineReducers } from 'redux';
// import { booksReducer } from './Books/booksReducer';
// import { devToolsEnhancer } from '@redux-devtools/extension';

// const enhancer = devToolsEnhancer();

// const rootReducer = combineReducers({ books: booksReducer });

// export const store = createStore(rootReducer, enhancer);

//import { booksReducer } from './Books/booksReducer';

// export const store = configureStore({
//   reducer: { books: booksReducer },
// });

import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import booksReducer from './Books/booksSlice';

const persistConfig = {
  key: 'books',
  storage,
};

const persistedReducer = persistReducer(persistConfig, booksReducer);

export const store = configureStore({
  reducer: { books: persistedReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
