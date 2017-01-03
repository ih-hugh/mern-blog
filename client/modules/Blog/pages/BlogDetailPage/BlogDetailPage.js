import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Divider from 'material-ui/Divider';

import WrapBlogListWithComments from './WrapBlogListWithComments';

// Import Style
import styles from '../../components/BlogListItem/BlogListItem.css';

// Import Actions
import { fetchPost, fetchComments } from '../../BlogActions';

// Import Selectors
import { getPost, getComments, getCommentsCount } from '../../BlogReducer';
import { getUser, getAuthenticatedStatus } from '../../../App/AppReducer';

// import { socket } from '../../../../util/initSocket';

class BlogDetailPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.post.cuid));
    this.props.dispatch(fetchComments(5, 0, `${this.props.post.slug}-${this.props.post.cuid}`));
  }

  render() {
    return (
      <div>
        <div>
          <Helmet title={this.props.post.title || 'Loading'} />
          <div className={`${styles['single-post']} ${styles['post-detail']}`}>
            <h3 className={styles['post-title']}>{this.props.post.title}</h3>
            <p className={styles['author-name']}>
              By {this.props.post.username.substr(0, this.props.post.username.indexOf('@'))}
            </p>
            <p className={styles['post-desc']}>{this.props.post.content}</p>
          </div>
          <Divider />
          <WrapBlogListWithComments
            isAuthenticated={this.props.isAuthenticated}
            commentsCount={this.props.commentsCount}
            comments={this.props.comments}
            post={this.props.post}
            user={this.props.user}
            params={this.props.params}
            dispatch={this.props.dispatch}
          />
        </div>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
BlogDetailPage.need = [
  params => fetchPost(params.cuid),
  params => fetchComments(5, 0, `${params.slug}-${params.cuid}`),
];

BlogDetailPage.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    postID: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  user: PropTypes.object,
  dispatch: PropTypes.func,
  params: PropTypes.object,
  commentsCount: PropTypes.number,
  isAuthenticated: PropTypes.bool,
};


// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    post: getPost(state, props.params.cuid),
    comments: getComments(state),
    user: getUser(state),
    commentsCount: getCommentsCount(state),
    isAuthenticated: getAuthenticatedStatus(state),
  };
}

export default connect(mapStateToProps)(BlogDetailPage);
