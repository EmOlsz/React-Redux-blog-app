import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchPosts } from "../actions";

class PostIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <p className="post__title">{post.title}</p>
                    <p className="post__content">{post.content}</p>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>Posts:</h1>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);