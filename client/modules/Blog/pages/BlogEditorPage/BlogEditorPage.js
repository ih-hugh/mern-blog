const isBrowser = typeof window != 'undefined' && window.document; // eslint-disable-line
import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { socket } from '../../../../util/initSocket';
import { getAuthenticatedStatus, getUser } from '../../../App/AppReducer';
import { emitUpdatePostRequest, fetchPost } from '../../BlogActions';
import { getPost } from '../../BlogReducer';

// Import Style
import styles from './BlogEditorPage.css';


export class BlogEditor extends Component {

  componentDidMount() {
    this.refs.content.value = this.props.post.content;
    this.refs.title.value = this.props.post.title;
  }

  updatePost = () => {
    const titleRef = this.refs.title.value;
    const contentRef = this.refs.content.value;

    if (titleRef && contentRef) {
      const post = {
        title: titleRef,
        content: contentRef,
      };
      this.props.dispatch(emitUpdatePostRequest(post, this.props.post.cuid));
      socket.emit('refresh bloglist');
    }
  };

  render() {
    const cls = `${styles.form}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Edit Blog Post</h2>
          <h3>{this.props.user ? this.props.user.email : 'Loading'}</h3>
          <input placeholder="Blog Title" className={styles['form-field']} ref="title" />
          <textarea placeholder="Blog Content" className={styles['form-field']} ref="content" />
          <RaisedButton
            backgroundColor="#333c5a"
            labelColor="#fff"
            onTouchTap={this.updatePost}
            label="Submit"
            containerElement={<Link to={'/'} />}
          />
        </div>
      </div>
    );
  }
}

BlogEditor.need = [params => fetchPost(params.cuid)];

BlogEditor.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

function mapStateToProps(store, props) {
  return {
    isAuthenticated: getAuthenticatedStatus(store),
    user: getUser(store),
    post: getPost(store, props.params.cuid),
  };
}

export default connect(mapStateToProps)(BlogEditor);
