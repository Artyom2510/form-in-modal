function postData(url = '', data = {}) {
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(response => response.json());
};

export const createItem = async (name, price) => {
	return await postData('/list', {name, price});
};

export const getList = async () => {
	return await fetch('/list').then(response => response.json());
}