import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MeetupApp from './MeetupApp';
import Provider from 'react-redux';
import store from './redux/store'

ReactDOM.render(
<Provider store={store}>
<MeetupApp />
</Provider>
, document.getElementById('root'));