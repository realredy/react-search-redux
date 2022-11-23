import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import BokokodeApp from './BokokodeApp';
import { Provider } from 'react-redux';
import store from './redux/store'

ReactDOM.render(
<Provider store={store}>
   <BokokodeApp />
</Provider>
, document.getElementById('root'));