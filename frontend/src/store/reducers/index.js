import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import encryptor from './encryptor';
import {connectRouter } from "connected-react-router"
import createCompressor from "redux-persist-transform-compress";
import authReducer from './auth/auth.reducer';
import pizzabuilder from './pizzabuilder/pizzabuilder.reducer';

const compressor = createCompressor();
const config = {
    blacklist: ['app', 'network', 'toast'],
    key: 'primary',
    storage,
    transforms: [encryptor, compressor]
}

const rootReducer = (history) => 
  persistCombineReducers(config,{
    authReducer,
    pizzabuilder,
    router: connectRouter(history),
});

export default rootReducer