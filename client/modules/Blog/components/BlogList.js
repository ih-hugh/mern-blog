import React, { PropTypes } from 'react';

// Import Components
import BlogListItem from './BlogListItem/BlogListItem';

import styles from './BlogList.css';
import fbStyles from '../../../styles/flexboxgrid.css';
import animateStyles from '../../../styles/animate.css';

function BlogList(props) {
  return (
    <div className="listView">
      {
        (props.posts.length === 0)
          ? <div className={`${fbStyles['container-fluid']} ${styles['no-post-message']}`}><p>Start Blogging</p></div>
          : props.posts.map((post, i) => (
            <div
              className={`${animateStyles.animated} ${animateStyles.fadeIn}`}
              style={{
                WebkitAnimationDuration: '1s',
                WebkitAnimationDelay: `${i / 2}s`,
              }}
            >
              <BlogListItem
                user={props.user}
                isAuthenticated={props.isAuthenticated}
                post={post}
                key={post.cuid}
                onEdit={() => props.handleEditPost(post)}
                onDelete={() => props.handleDeletePost(post)}
              />
            </div>
          ))
      }
    </div>
  );
}

BlogList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
  handleEditPost: PropTypes.func.isRequired,
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default BlogList;
