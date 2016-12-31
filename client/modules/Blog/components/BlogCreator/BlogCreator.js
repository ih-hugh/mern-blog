const isBrowser = typeof window != 'undefined' && window.document; // eslint-disable-line
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

import { getAuthenticatedStatus, getUser } from '../../../App/AppReducer';
import { emitAddPostRequest } from '../../BlogActions';
import { socket } from '../../../../util/initSocket';

// Import Style
import styles from './BlogCreator.css';


export class BlogCreator extends Component {

  addPost = () => {
    const usernameRef = this.props.user.email || 'Loading';
    let titleRef = this.refs.title.value;
    let contentRef = this.refs.content.value;
    if (usernameRef && titleRef && contentRef) {
      const post = {
        username: usernameRef,
        title: titleRef,
        content: contentRef,
      };
      this.props.dispatch(emitAddPostRequest(post));
      socket.emit('refresh bloglist');
      titleRef = contentRef = '';
    }
  };

  render() {
    const cls = `${styles.form}`;
    return (
      <div className={cls}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Create New Blog Post</h2>
          <h3>{this.props.user ? this.props.user.email : 'Loading'}</h3>
          <input placeholder="Blog Title" className={styles['form-field']} ref="title" />
          <textarea placeholder="Blog Content" className={styles['form-field']} ref="content" />
          <RaisedButton
            backgroundColor="#333c5a"
            labelColor="#fff"
            onTouchTap={this.addPost}
            label="Submit"
            containerElement={<Link to={'/'} />}
          />
        </div>
      </div>
    );
  }
}

BlogCreator.propTypes = {
  user: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    isAuthenticated: getAuthenticatedStatus(store),
    user: getUser(store),
  };
}

export default connect(mapStateToProps)(BlogCreator);
