import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import BlogList from '../../components/BlogList';
import { socket } from '../../../../util/initSocket';

import { getUser, getAuthenticatedStatus } from '../../../App/AppReducer';

import { fetchPosts, deletePostRequest } from '../../BlogActions';
import { getPosts, getPostsCount } from '../../BlogReducer';


const paginateContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
};

class BlogListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      limit: 5,
      page: 1,
    };

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchPosts(5, 0));
    socket.on('refresh bloglist', () => {
      this.props.dispatch(fetchPosts(5, 0));
    });
  }

  onChange(page) {
    const offset = page - 1;
    this.setState({ offset, page }, () => {
      this.props.dispatch(fetchPosts(this.state.limit, this.state.offset));
    });
    if (typeof window !== undefined) {
      window.scrollTo(0, 482);
    }
  }

  handleDeletePost = post => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deletePostRequest(post.cuid));
      socket.emit('refresh bloglist', () => {
        this.props.dispatch(fetchPosts());
      });
    }
  };

  render() {
    return (
      <div>
        <BlogList
          isAuthenticated={this.props.isAuthenticated}
          user={this.props.user || 'Loading'}
          handleDeletePost={this.handleDeletePost}
          handleEditPost={this.handleEditPost}
          posts={this.props.posts}
        />
        <div style={paginateContainerStyle}>
          <Pagination
            activePage={this.state.page}
            itemsCountPerPage={this.state.limit}
            totalItemsCount={this.props.postsCount}
            pageRangeDisplayed={5}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
BlogListPage.need = [() => { return fetchPosts(5, 0); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    posts: getPosts(state),
    user: getUser(state),
    postsCount: getPostsCount(state),
    isAuthenticated: getAuthenticatedStatus(state),
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
  postsCount: PropTypes.number.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

BlogListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(BlogListPage);
