import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes/Routes'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './Reducers/rootReducer'
import './styles/css/app.css'

const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}> <Routes/> </Provider>, document.getElementById('root'));

