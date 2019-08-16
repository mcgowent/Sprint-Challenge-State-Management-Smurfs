import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import SmurfList from './components/SmurfList'
import { reducer } from './reducers'

import "./index.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>SMURFS! 2.0 W/ Redux</h1>
                <div>Welcome to your state management version of Smurfs!</div>
                <div>Start inside of your `src/index.js` file!</div>
                <div>Have fun!</div>
                <SmurfList />
            </div>
        );
    }
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"));
