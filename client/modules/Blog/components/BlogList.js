import React, { PropTypes } from 'react';

// Import Components
import BlogListItem from './BlogListItem/BlogListItem';

import styles from './BlogList.css';
import fbStyles from '../../../styles/flexboxgrid.css';

function BlogList(props) {
  return (
    <div className="listView">
      {
        (props.posts.length === 0)
          ? <div className={`${fbStyles['container-fluid']} ${styles['no-post-message']}`}><p>Start Blogging</p></div>
          : props.posts.map(post => (
            <BlogListItem
              user={props.user}
              post={post}
              key={post.cuid}
              onEdit={() => props.handleEditPost(post)}
              onDelete={() => props.handleDeletePost(post)}
            />
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
};

export default BlogList;
