import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchSinglePost } from '../actions';

class PostNew extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchSinglePost(id);
  }

  onDelete() {

  }

  render() {
    const { singlePost } = this.props;
    if (!singlePost) return <h1>Loading...</h1>;
    return (
      <div>
        <h1>Post show</h1>
        <div>
          <h3>Title</h3>
          <p>{singlePost.title}</p>
        </div>
        <div>
          <h3>Categories</h3>
          <p>{singlePost.categories}</p>
        </div>
        <div>
          <h3>Content</h3>
          <p>{singlePost.content}</p>
        </div>
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
        <button
          className="btn btn-danger margin-left"
          onClick={this.onDelete}
        >
          Delete
        </button>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    singlePost: state.posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchSinglePost })(PostNew);