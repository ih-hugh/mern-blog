import React, { PropTypes } from 'react';
import format from 'date-fns/format';

import animateStyles from '../../../../styles/animate.css';
import fbStyles from '../../../../styles/flexboxgrid.css';


// Import Style
import styles from './BlogCommentListItem.css';

function BlogCommentListItem(props) {
  const { comment } = props;
  return (
    <div className={`${fbStyles['container-fluid']} ${animateStyles.animated} ${animateStyles.fadeIn}`} >
      <div className={`${fbStyles.row} ${styles.comment}`}>
        <p
          className={`
          ${styles['author-name']}
           ${fbStyles['col-xs-12']}
           ${fbStyles['col-sm-2']}
           ${fbStyles['col-md-2']}
           ${fbStyles['col-lg-1']}
        `}
        >
          {comment.username.substr(0, comment.username.indexOf('@'))}
        </p>
        <p
          className={`
            ${styles['comment-desc']} 
            ${fbStyles['col-xs-6']}
            ${fbStyles['col-sm-6']}
            ${fbStyles['col-md-7']}
            ${fbStyles['col-lg-8']}
          `}
        >
          {comment.content}
        </p>
        <p
          className={`
            ${styles['comment-date']} 
            ${fbStyles['col-xs-6']} 
            ${fbStyles['col-sm-4']}
            ${fbStyles['col-md-3']}
            ${fbStyles['col-lg-3']}
          `}
        >
          {`${format(comment.datetime, 'YYYY-MM-DD hh:mm:ss A')}`}
        </p>
        {
          /** user && user.email === comment.username ?
            <div
              className={`
              ${styles['comment-action']}
              ${fbStyles['col-xs-6']}
              ${fbStyles['col-sm-1']}
              ${fbStyles['col-md-1']}
          `}>
              <a>
                Delete
              </a>
            </div> : <div></div> */
        }
      </div>
    </div>
    
  );
}

BlogCommentListItem.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    postID: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    datetime: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default BlogCommentListItem;
