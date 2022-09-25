import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { persistStore } from "redux-persist";
import thunk from 'redux-thunk';

export default function configureStore(history) {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        rootReducer(history),
        composeEnhancers(
            applyMiddleware(thunk)
        ));

    const persistor = persistStore(store);
    
    return {persistor, store };
}