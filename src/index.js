import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import Modal from 'react-modal';
import App from './App';
import { loadList } from './actions';

const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(loadList());

Modal.setAppElement('#root');

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);