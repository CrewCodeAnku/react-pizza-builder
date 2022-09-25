import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore  from './store';
import * as serviceWorker from './serviceWorker';

export const history = createBrowserHistory();
const {persistor, store} = configureStore(history);

ReactDOM.render((
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
             <ConnectedRouter history={history}>
                <BrowserRouter>
                    <Suspense fallback={<div className="d-flex justify-content-center mt-5">Loading...</div>}>
                      <App />
                    </Suspense>
                </BrowserRouter>
             </ConnectedRouter>
        </PersistGate>
      </Provider>
    ),
    document.getElementById('root'));

serviceWorker.unregister();
