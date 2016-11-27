import { createAction } from 'redux-actions';
import 'whatwg-fetch'
import { stringify } from 'querystring'

// export const addErrorCode = (code, desc) => ({
// 	type: 'ADD_ERROR_CODE',
// 	payload: {
// 		code,
// 		desc
// 	}
// })

// export let addErrorCode = createAction('ADD_ERROR_CODE')

export let fetchedErrorCode = (data) => ({
	type: 'FETCHED_ERROR_CODE',
	payload: data
})

export let queryErrorCode = (options = {}) => ((dispatch) => {
	fetch('/api/ec/query?' + stringify(options) )
		.then(function(response) {
			return response.json()
		}).then(function(body) {
			dispatch( fetchedErrorCode(body.data) )
		});
})

export let addErrorCodeSuccess = (data) => ({
	type: 'ADD_ERROR_CODE_SUCCESS',
	payload: data
})

export let addErrorCode =(options) => (dispatch) => {
	fetch('/api/ec/add', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(options)
	})
	.then(function(response){
		return response.json();
	})
	.then(function(data) {
		dispatch( addErrorCodeSuccess(data.data) )
	});
}

// ({
// 	type: 'ADD_ERROR_CODE',
// 	payload: options
// })

// export let addErrorCode = (options) => ((dispatch) => ({
// 	fetch('/api/ec/query')
// 		.then(function(response) {
// 			return response.json()
// 		}).then(function(body) {
// 			dispatch( fetchedErrorCode(body.data) )
// 		});
// }))


// export addErrorCode