import produce from 'immer';
import {
	ADD_ITEM_BEGIN,
	ADD_ITEM_SUCCESS,
	ADD_ITEM_ERROR,
	LOAD_LIST_BEGIN,
	LOAD_LIST_SUCCESS,
	LOAD_LIST_ERROR,
	OPEN_NEW_LIST_MODAL,
	CLOSE_NEW_LIST_MODAL
} from './actions';

const initialState = {
	list: [],
	saveInProgress: false,
	listLoading: false,
	saveError: null,
	listError: null,
	isModalOpen: false
};

const reducer = produce((draft, action) => {
	switch(action.type) {
		case ADD_ITEM_BEGIN:
			draft.saveInProgress = true;
			draft.saveError = null;
			return;
		case ADD_ITEM_SUCCESS:
			draft.saveInProgress = false;
			draft.list.push(action.payload);
			draft.isModalOpen = false;
			return;
		case ADD_ITEM_ERROR:
			draft.saveInProgress = false;
			draft.saveError = action.error;
			return;
		case LOAD_LIST_BEGIN:
			draft.listLoading = true;
			return;
		case LOAD_LIST_SUCCESS:
			draft.list = action.payload;
			draft.listLoading = false;
			return;
		case LOAD_LIST_ERROR:
			draft.listLoading = false;
			draft.listError = action.error;
			return;
		case OPEN_NEW_LIST_MODAL:
			draft.isModalOpen = true;
			return;
		case CLOSE_NEW_LIST_MODAL:
			draft.isModalOpen = false;
			draft.saveError = null;
			return;
		default:
			return;
	}
}, initialState);

export default reducer;