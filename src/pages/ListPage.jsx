import React from 'react';
import {connect} from 'react-redux';
import CreateItem from '../components/CreateItem';
import Modal from 'react-modal';
import {newListModalClose, newListModalOpen} from '../actions';

const ListPage = ({
	list,
	listLoading,
	listError,
	isModalOpen,
	newListModalClose,
	newListModalOpen
}) => {

	if (listLoading) {
		return <div>Loading...</div>
	}

	if (listError) {
		return <div> {listError.message} </div>
	}

	return list.length === 0 ? (
		<CreateItem />
	) : (
		<>
			<h1>List</h1>
			<button
				onClick={newListModalOpen}
			>
				New Item Add
			</button>
			<ul>
				{list.map(({id, name, price}) => (
					<li key={id}>
						<span>{name}</span>
						<span>${price}</span>
						{/* <span>${price.toFixed(2)}</span> */}
					</li>
				))}
			</ul>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={newListModalClose}
			>
				<CreateItem />
			</Modal>
		</>
	)
};

const mapState = ({
	list,
	listLoading,
	listError,
	isModalOpen
}) => ({
	list,
	listLoading,
	listError,
	isModalOpen
});

const mapDispatch = {
	newListModalOpen,
	newListModalClose
}

export default connect(mapState, mapDispatch)(ListPage);