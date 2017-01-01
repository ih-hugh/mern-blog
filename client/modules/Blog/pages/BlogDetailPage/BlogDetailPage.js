import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Divider from 'material-ui/Divider';

import BlogCommentList from '../../components/BlogCommentList/BlogCommentList';

// Import Style
import styles from '../../components/BlogListItem/BlogListItem.css';

// Import Actions
import { fetchPost, fetchComments } from '../../BlogActions';

// Import Selectors
import { getPost, getComments } from '../../BlogReducer';

const BlogDetailPage = (props) => {
  return (
    <div>
      <Helmet title={props.post.title} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{props.post.title}</h3>
        <p className={styles['author-name']}>{props.post.username}</p>
        <p className={styles['post-desc']}>{props.post.content}</p>
      </div>
      <Divider />
      <BlogCommentList comments={props.comments} />
    </div>
  );
};


// Actions required to provide data for this component to render in sever side.
BlogDetailPage.need = [
  params => fetchPost(params.cuid),
  params => fetchComments(5, 0, params.cuid),
];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    post: getPost(state, props.params.cuid),
    comments: getComments(state),
  };
}

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
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(BlogDetailPage);
