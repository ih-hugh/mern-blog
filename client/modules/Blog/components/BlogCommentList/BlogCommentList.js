import React, { PropTypes } from 'react';

// Import Components
import BlogCommentListItem from '../BlogCommentListItem/BlogCommentListItem';

import styles from './BlogCommentList.css';
import fbStyles from '../../../../styles/flexboxgrid.css';
import animateStyles from '../../../../styles/animate.css';

function BlogCommentList(props) {
  return (
    <div className={`${styles['list-view']}`}>
      <h4>Comments</h4>
      {
        (props.comments.length === 0)
          ? <div className={`${fbStyles['container-fluid']} ${styles['no-post-message']}`}><p>Start Blogging</p></div>
          : props.comments.map((comment, i) => (
            <div
              key={comment.cuid}
              className={`${animateStyles.animated} ${animateStyles.fadeIn}`}
              style={{
                WebkitAnimationDuration: '1s',
                WebkitAnimationDelay: `${i / 2}s`,
              }}
            >
              <BlogCommentListItem
                user={props.user}
                isAuthenticated={props.isAuthenticated}
                comment={comment}
                onDelete={() => props.handleDeleteComment(comment)}
              />
            </div>
          ))
      }
    </div>
  );
}

BlogCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    postID: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteComment: PropTypes.func.isRequired,
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default BlogCommentList;
