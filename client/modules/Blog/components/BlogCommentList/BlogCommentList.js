import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
// Import Components
import BlogCommentListItem from '../BlogCommentListItem/BlogCommentListItem';
import RaisedButton from 'material-ui/RaisedButton';

import { emitAddCommentRequest } from '../../BlogActions';

import styles from './BlogCommentList.css';
import fbStyles from '../../../../styles/flexboxgrid.css';
import animateStyles from '../../../../styles/animate.css';

import { socket } from '../../../../util/initSocket';

class BlogCommentList extends Component {

  componentDidMount() {
    socket.emit('refresh commentlist');
  }

  componentWillUnmount() {
    socket.emit('refresh commentlist');
  }


  addComment = () => {
    const username = this.props.user.email;
    const postID = `${this.props.post.slug}-${this.props.post.cuid}`;
    let content = this.refs.content.value;

    console.log(content.length);

    if (username && postID && content) {
      const comment = {
        username,
        content,
        postID,
      };
      this.props.dispatch(emitAddCommentRequest(comment));
      socket.emit('refresh commentlist');
      content = this.refs.content.value = '';
    }
  };

  handleLoginRedirect = () => {
    browserHistory.push('/login');
  }

  render() {
    return (
      <div className={`${styles['list-view']} ${fbStyles['container-fluid']}`}>
        <h4>Comments</h4>
        <div className={`${styles['comment-list-container']}`}>
          <div className={`${styles['comment-list']} `}>
            {
              (typeof this.props.comments !== undefined && this.props.comments.length === 0 && this.props.user)
                ? <div className={`${styles['no-comment-message']}`}><p>Be the first to comment!</p></div>
                : this.props.comments.map((comment, i) => (
                  <div
                    key={comment.cuid}
                    className={`${animateStyles.animated} ${animateStyles.fadeIn}`}
                    style={{
                      WebkitAnimationDuration: '1s',
                      WebkitAnimationDelay: `${i / 4}s`,
                    }}
                  >
                    <BlogCommentListItem
                      key={comment.cuid}
                      user={this.props.user}
                      comment={comment}
                    />
                  </div>
                )).reverse()
            }
          </div>
        </div>
        {
          this.props.isAuthenticated && this.props.user ? <div className={`${styles.form}`}>
            <div className={styles['form-content']}>
              <h3>Logged in as {this.props.user ? this.props.user.email.substr(0, this.props.user.email.indexOf('@')) : 'Loading'}</h3>
              <textarea placeholder="Comment..." className={styles['form-field']} ref="content" />
              <RaisedButton
                backgroundColor="#333c5a"
                labelColor="#fff"
                onTouchTap={this.addComment}
                label="Submit"
              />
            </div>
          </div> : <div className={`${styles['no-auth']}`}><a onTouchTap={this.handleLoginRedirect}>Login to comment</a></div>
        }
      </div>
    );
  }
}

BlogCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    postID: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  handleDeleteComment: PropTypes.func.isRequired,
  user: PropTypes.object,
  post: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect()(BlogCommentList);
