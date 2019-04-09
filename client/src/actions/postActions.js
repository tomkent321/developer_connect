import axios from "axios";
import * as actionTypes from "./actionTypes";

//Add Post
export const addPost = postData => dispatch => {
  axios
    .post("/api/posts", postData)
    .then(res =>
      dispatch({
        type: actionTypes.ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Posts Loading
export const setPostLoading = () => {
  return {
    type: actionTypes.POST_LOADING
  };
};

//Delete Post
export const deletePost = id => dispatch => {
  axios
    .delete(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: actionTypes.DELETE_POST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Get all posts
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/api/posts/")
    .then(res =>
      dispatch({
        type: actionTypes.GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: actionTypes.GET_POSTS,
        payload: null
      })
    );
};
