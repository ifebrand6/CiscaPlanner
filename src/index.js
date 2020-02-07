import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import {createStore,applyMiddleware,compose} from 'redux'
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { createFirestoreInstance,reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';

import alphaReducer from './store/reducers/alphaReducer';
import fbConfig from './config/fbConfig'


const store  = createStore(alphaReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(firebase,fbConfig)
)
);
const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true,
    attachAuthIsReady: true
}
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance 
    }
ReactDOM.render(<Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><App /></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// maryland3468 contactify2011@gmail.com
serviceWorker.unregister();

