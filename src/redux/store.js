import { createStore, combineReducers } from 'redux';
import { booksReducer } from './Books/booksReducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const enhancer = devToolsEnhancer();

const rootReducer = combineReducers({ books: booksReducer });

export const store = createStore(rootReducer, enhancer);
