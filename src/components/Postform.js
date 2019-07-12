import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { createPost } from '../actions/postActions';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: ''
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		};

		this.props.createPost(post);
	}

	render() {
		return (
			<div>
				<h1>Add Posts</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label htmlFor="title">Title:</label>
						<input type="text" name="title" id="title" onChange={this.onChange} value={this.state.title} />
					</div>
					<br />
					<div>
						<label htmlFor="body">Body:</label>
						<input type="text" name="body" id="body" onChange={this.onChange} value={this.state.body} />
					</div>
					<br />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

Post.propTypes = {
	createPost: propTypes.func.isRequired
};

export default connect(null, { createPost })(Post);
