import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import format from 'date-fns/format';
import RaisedButton from 'material-ui/RaisedButton';

import animateStyles from '../../../../styles/animate.css';

// Import Style
import styles from './BlogCommentListItem.css';

const actionStyles = {
  margin: '10px',
};

function BlogCommentListItem(props) {
  const { comment, onDelete, isAuthenticated, user } = props;
  return (
    <div className={`${styles.comment} ${animateStyles.animated} ${animateStyles.fadeIn}`} >

      <p className={styles['author-name']}>By {comment.username.substr(0, comment.username.indexOf('@'))}</p>
      <p className={styles['comment-desc']}>{comment.content}</p>
      <p className={styles['comment-date']}>
        {`${format(comment.datetime, 'YYYY-MM-DD h:m:s A')}`}
      </p>
      {
        isAuthenticated && comment.username === user.email ?
          <div className={styles['comment-action']}>
            <RaisedButton
              backgroundColor="#333c5a"
              labelColor="#fff"
              style={actionStyles}
              label="Delete"
              onTouchTap={onDelete}
            />
            <RaisedButton
              backgroundColor="#333c5a"
              labelColor="#fff"
              style={actionStyles}
              label="Comment"
              containerElement={<Link to={`/edit/comment/${comment.slug}-${comment.cuid}`} />}
            />
          </div> : <div></div>
      }
      <hr className={styles.divider} />
    </div>
  );
}

BlogCommentListItem.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    postID: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default BlogCommentListItem;
