import React, {useState, useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions';

const CreateList = ({
	dispatch,
	saveInProgress,
	saveError
}) => {
	const [itemName, setItemName] = useState('');
	const [price, setPrice] = useState('');
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(addItem(itemName, price));
	};

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
					disabled={saveInProgress}
					onChange={e => setItemName(e.target.value)}
				/>
				<label htmlFor="inputPrice">Item price:</label>
				<input
					id="inputPrice"
					type="text"
					value={price}
					disabled={saveInProgress}
					onChange={e => setPrice(e.target.value)}
				/>
				{saveError && (
					<p>Error: {saveError.message} </p>
				)}
				<button
					type="submit"
					disabled={saveInProgress}
				>
					Create item
				</button>
			</form>
		</>
	);
};

const mapState = ({saveInProgress, saveError}) => ({
	saveInProgress,
	saveError
});

export default connect(mapState)(CreateList);