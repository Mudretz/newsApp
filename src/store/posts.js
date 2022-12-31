import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../api/posts.api";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        entities: [],
        error: null
    },
    reducers: {
        postsReceved: (state, action) => {
            state.entities = action.payload;
        }
    }
});

const { reducer: postsReducer, actions } = postsSlice;
const { postsReceved } = actions;
export const getPost = () => (state) => state.posts.entities;
export const loadPostsList = () => async (dispatch) => {
    try {
        const content = await getPosts();
        dispatch(postsReceved(content));
    } catch (error) {
       console.log(error.message);
    }
};
export const getPostById = (id) => (state) => {
    if (state.posts.entities) {
        return state.posts.entities.find((p) => p.id === id);
    }
};

export default postsReducer;
