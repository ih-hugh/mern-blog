import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import format from 'date-fns/format';
import RaisedButton from 'material-ui/RaisedButton';

// Import Style
import styles from './BlogListItem.css';

const actionStyles = {
  margin: '10px',
};

function BlogListItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/posts/${props.post.slug}-${props.post.cuid}`} >
          {props.post.title}
        </Link>
      </h3>

      <p className={styles['author-name']}>{props.post.username}</p>
      <p className={styles['post-desc']}>{props.post.content}</p>
      <p className={styles['post-date']}>
        {`${format(props.post.datetime, 'YYYY-MM-DD h:m:s A')}`}
      </p>
      {
        props.isAuthenticated && props.post.username === props.user.email ?
          <div className={styles['post-action']}>
            <RaisedButton style={actionStyles} label="Delete" onTouchTap={props.onDelete} />
            <RaisedButton
              style={actionStyles}
              label="Edit"
              containerElement={
                <Link to={`/edit/post/${props.post.slug}-${props.post.cuid}`} />}
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
  onEdit: PropTypes.func.isRequired,
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default BlogListItem;
