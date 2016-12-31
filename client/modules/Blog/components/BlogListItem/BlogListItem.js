import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import format from 'date-fns/format';
import RaisedButton from 'material-ui/RaisedButton';

import animateStyles from '../../../../styles/animate.css';

// Import Style
import styles from './BlogListItem.css';

const actionStyles = {
  margin: '10px',
};

function BlogListItem(props) {
  const { post, onDelete, isAuthenticated, user } = props;
  return (
    <div className={`${styles['single-post']} ${animateStyles.animated} ${animateStyles.fadeIn}`} >
      <h3 className={styles['post-title']}>
        <Link to={`/posts/${post.slug}-${post.cuid}`} >
          {post.title}
        </Link>
      </h3>

      <p className={styles['author-name']}>By {post.username.substr(0, post.username.indexOf('@'))}</p>
      <p className={styles['post-desc']}>{post.content}</p>
      <p className={styles['post-date']}>
        {`${format(post.datetime, 'YYYY-MM-DD h:m:s A')}`}
      </p>
      {
        isAuthenticated && post.username === user.email ?
          <div className={styles['post-action']}>
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
              label="Edit"
              containerElement={<Link to={`/edit/post/${post.slug}-${post.cuid}`} />}
            />
          </div> : <div></div>
      }
      <hr className={styles.divider} />
    </div>
  );
}

BlogListItem.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default BlogListItem;
