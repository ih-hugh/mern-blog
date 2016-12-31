import { ADD_POST, ADD_POSTS, DELETE_POST, SERVER_ADD_POST, SERVER_UPDATE_POST, SET_POSTS_COUNT } from './BlogActions';


// Initial State
const initialState = { data: [], postsCount: 0 };

const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        data: [action.post, ...state.data],
      };

    case SERVER_ADD_POST:
      return {
        data: [action.post, ...state.data],
      };

    case SERVER_UPDATE_POST:
      return {
        data: [action.post, ...state.data],
      };

    case SET_POSTS_COUNT:
      return Object.assign({}, state, {
        postsCount: action.postsCount,
      });

    case ADD_POSTS:
      return {
        data: action.posts,
      };

    case DELETE_POST:
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.blog.data;

// Get Post Count
export const getPostsCount = state => state.blog.postsCount;

// Get post by cuid
export const getPost = (state, cuid) => state.blog.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default BlogReducer;
