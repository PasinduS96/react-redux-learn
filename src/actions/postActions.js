import { FETCH_POSTS, NEW_POSTS } from './types';

export function fetchPosts() {
	return function(dispatch) {
		fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((json) =>
			dispatch({
				type: FETCH_POSTS,
				payload: json
			})
		);
	};
}

export function createPost(postData) {
	return function(dispatch) {
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(postData)
		})
			.then((response) => response.json())
			.then((json) =>
				dispatch({
					type: NEW_POSTS,
					payload: json
				})
			);
	};
}
