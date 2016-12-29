import React, { PropTypes } from 'react';

// Import Components
import BlogListItem from './BlogListItem/BlogListItem';

function BlogList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <BlogListItem
            post={post}
            key={post.cuid}
            onDelete={() => props.handleDeletePost(post.cuid)}
          />
        )).reverse()
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
};

export default BlogList;
