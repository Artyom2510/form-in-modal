import React, {useState, useRef, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from '../actions';

const CreateList = () => {
	const [itemName, setItemName] = useState('');
	const [price, setPrice] = useState('');
	const inputRef = useRef();
	const dispatch = useDispatch();
	const inProccess = useSelector(state => state.saveInProgress);
	const error = useSelector(state => state.saveError);
	const createItem = useCallback((itemName, price) => {
		dispatch(addItem(itemName, price))
	}, [dispatch])
	const handleSubmit = e => {
		e.preventDefault();
		createItem(itemName, price);
	};

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<>
			<h1>List empty</h1>
			<form
				onSubmit={(e) => handleSubmit(e)}
			>
				<label htmlFor="inputitem">Item name:</label>
				<input
					id="inputitem"
					ref={inputRef}
					type="text"
					value={itemName}
					disabled={inProccess}
					onChange={e => setItemName(e.target.value)}
				/>
				<label htmlFor="inputPrice">Item price:</label>
				<input
					id="inputPrice"
					type="text"
					value={price}
					disabled={inProccess}
					onChange={e => setPrice(e.target.value)}
				/>
				{error && (
					<p>Error: {error.message} </p>
				)}
				<button
					type="submit"
					disabled={inProccess}
				>
					Create item
				</button>
			</form>
		</>
	);
};

export default CreateList;