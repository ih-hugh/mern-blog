import callApi from '../../util/apiCaller';
import { batchActions } from 'redux-batched-actions';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const SET_POSTS_COUNT = 'SET_POSTS_COUNT';
export const SERVER_ADD_POST = 'server/addPost';
export const SERVER_UPDATE_POST = 'server/updatePost';

export const ADD_COMMENTS = 'ADD_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const SET_COMMENTS_COUNT = 'SET_COMMENTS_COUNT';
export const SERVER_ADD_COMMENT = 'server/addComment';

// Export Actions
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function setPostCount(postsCount) {
  return {
    type: SET_POSTS_COUNT,
    postsCount,
  };
}

export function updatePost(post) {
  return {
    type: UPDATE_POST,
    post,
  };
}

export function serverAddPost(post) {
  return {
    type: SERVER_ADD_POST,
    post,
  };
}

export function emitUpdatePostRequest(post, cuid) {
  return (dispatch) => {
    return callApi(`/posts/${cuid}`, 'put', {
      post: {
        title: post.title,
        content: post.content,
      },
    }).then(res => dispatch({ type: SERVER_UPDATE_POST, post: res.post }));
  };
}

export function emitAddPostRequest(post) {
  return (dispatch) => {
    return callApi('posts', 'post', {
      post: {
        username: post.username,
        title: post.title,
        content: post.content,
      },
    }).then(res => dispatch(serverAddPost(res.post)));
  };
}

export function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts,
  };
}

export function fetchPosts(limit, offset) {
  return (dispatch) => {
    return callApi(`posts/?limit=${limit}&offset=${offset}`)
      .then(res => batchActions([
        dispatch(addPosts(res.posts)),
        dispatch(setPostCount(res.postsCount)),
      ]));
  };
}

export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
  };
}


export function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  };
}

export function deletePostRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)));
  };
}

// Comment Actions

export function addComments(comments) {
  return {
    type: ADD_COMMENTS,
    comments,
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}

export function setCommentsCount(commentsCount) {
  return {
    type: SET_COMMENTS_COUNT,
    commentsCount,
  };
}

export function fetchComments(limit, offset, postID) {
  return dispatch => callApi(`comments/${postID}/?limit=${limit}&offset=${offset}`)
    .then(res => batchActions([
      dispatch(addComments(res.comments)),
      dispatch(setCommentsCount(res.commentsCount)),
    ]));
}

export function serverAddComment(comment) {
  return {
    type: SERVER_ADD_COMMENT,
    comment,
  };
}

export function emitAddCommentRequest(comment) {
  return (dispatch) => {
    return callApi('comments', 'post', {
      comment: {
        username: comment.username,
        content: comment.content,
        postID: comment.postID,
      },
    }).then(res => dispatch(serverAddComment(res.comment)));
  };
}
