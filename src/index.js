import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Entry extends Component {
    render() {
        return <div>Entry</div>
    }
}

class Exit extends Component {
    render() {
        return <div>Exit</div>
    }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/*<App />*/}
      <BrowserRouter>
          <div>
              <div>React Router</div>
              <Route path="/entry" component={Entry}/>
              <Route path="/exit" component={Exit}/>
          </div>
      </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
