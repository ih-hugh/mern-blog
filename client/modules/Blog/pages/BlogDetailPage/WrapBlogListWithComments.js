import React, { PropTypes, Component } from 'react';
import Pagination from 'react-js-pagination';

import BlogCommentList from '../../components/BlogCommentList/BlogCommentList';

// Import Actions
import { fetchComments } from '../../BlogActions';

const paginateContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
};

class WrapBlogListWithComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      limit: 5,
      page: 1,
    };
  }

  onChange = page => {
    const offset = page - 1;
    this.setState({ offset, page }, () => {
      this.props.dispatch(fetchComments(this.state.limit, this.state.offset, `${this.props.params.slug}-${this.props.params.cuid}`));
    });
  }

  render() {
    console.log(this.props.commentsCount);
    return (
      <div>
        <BlogCommentList
          isAuthenticated={this.props.isAuthenticated || false}
          comments={this.props.comments || []}
          post={this.props.post}
          user={this.props.user}
        />
        {
          this.props.isAuthenticated && this.props.commentsCount > 5 ?
            <div style={paginateContainerStyle}>
              <Pagination
                activePage={this.state.page}
                itemsCountPerPage={this.state.limit}
                totalItemsCount={this.props.commentsCount || 0}
                pageRangeDisplayed={5}
                onChange={this.onChange}
              />
            </div> : <div></div>
        }
      </div>
    );
  }
}

WrapBlogListWithComments.need = [
  params => fetchComments(5, 0, `${params.slug}-${params.cuid}`),
];

WrapBlogListWithComments.propTypes = {
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
  isAuthenticated: PropTypes.number,
};

export default WrapBlogListWithComments;
