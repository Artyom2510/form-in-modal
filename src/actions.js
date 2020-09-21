import { createItem, getList } from './api';

export const ADD_ITEM_BEGIN = 'ADD_ITEM_BEGIN';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_ERROR = 'ADD_ITEM_ERROR';
export const LOAD_LIST_BEGIN = 'LOAD_LIST_BEGIN';
export const LOAD_LIST_SUCCESS = 'LOAD_LIST_SUCCESS';
export const LOAD_LIST_ERROR = 'LOAD_LIST_ERROR';
export const OPEN_NEW_LIST_MODAL = 'OPEN_NEW_LIST_MODAL';
export const CLOSE_NEW_LIST_MODAL = 'CLOSE_NEW_LIST_MODAL';

export const addItem = (name, price) => {
	return dispatch => {
		dispatch({ type: ADD_ITEM_BEGIN });
		createItem(name, price)
			.then(item => {
				dispatch({
					type: ADD_ITEM_SUCCESS,
					payload: item
				});
			})
			.catch(error => {
				dispatch({
					type: ADD_ITEM_ERROR,
					error
				});
			});
	};
};

export const loadList = () => {
	return dispatch => {
		dispatch({ type: LOAD_LIST_BEGIN });
		getList()
			.then(list => {
				dispatch({
					type: LOAD_LIST_SUCCESS,
					payload: list
				});
			})
			.catch(error => {
				dispatch({
					type: LOAD_LIST_ERROR,
					error
				});
			});
	};
};

export const newListModalOpen = () => ({
	type: OPEN_NEW_LIST_MODAL
});

export const newListModalClose = () => ({
	type: CLOSE_NEW_LIST_MODAL
});