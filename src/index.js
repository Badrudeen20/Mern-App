import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import value from './component/redux/comb/Comb'
import {Provider} from 'react-redux'


const store = createStore(value)

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
       <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
