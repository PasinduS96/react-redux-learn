import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import propTypes from 'prop-types';

class Post extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}
	render() {
		const postItems = this.props.posts.map((post) => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));
		return (
			<div>
				<h1>Posts</h1>
				{postItems}
			</div>
		);
	}
}

Post.propTypes = {
	fetchPosts: propTypes.func.isRequired,
	posts: propTypes.array.isRequired
};

const mapStateToProps = (state) => ({
	posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Post);
