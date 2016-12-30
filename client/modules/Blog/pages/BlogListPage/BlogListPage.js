import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import BlogList from '../../components/BlogList';

// Import Actions
import { fetchPosts, deletePostRequest, editPostRequest } from '../../BlogActions';
import { getUser } from '../../../App/AppReducer';

// Import Selectors
import { getPosts } from '../../BlogReducer';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

class BlogListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    socket.on('refresh bloglist', () => {
      this.props.dispatch(fetchPosts());
    });
  }

  handleDeletePost = post => {
    console.log(post);
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deletePostRequest(post.cuid));
      socket.emit('refresh bloglist', () => {
        this.props.dispatch(fetchPosts());
      });
    }
  };

  handleEditPost = post => {
    console.log(post);
    if (confirm('Do you want to edit this post')) { // eslint-disable-line
      this.props.dispatch(editPostRequest(post.cuid));
      socket.emit('refresh bloglist', () => {
        this.props.dispatch(fetchPosts());
      });
    }
  }

  render() {
    return (
      <div>
        <BlogList
          user={this.props.user || 'Loading'}
          handleDeletePost={this.handleDeletePost}
          handleEditPost={this.handleEditPost}
          posts={this.props.posts}
        />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
BlogListPage.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    posts: getPosts(state),
    user: getUser(state),
  };
}

BlogListPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
};

BlogListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(BlogListPage);
