import { createSlice } from "@reduxjs/toolkit";
import { getComments } from "../api/comments.api";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        entities: [],
        error: null
    },
    reducers: {
        commentsReceved: (state, action) => {
            state.entities = action.payload;
        }
    }
});

const { reducer: commentsReducer, actions } = commentsSlice;
const { commentsReceved } = actions;
export const getComment = () => (state) => state.comments.entities;
export const loadCommentsList = () => async (dispatch) => {
    try {
        const content = await getComments();
        dispatch(commentsReceved(content));
    } catch (error) {
       console.log(error.message);
    }
};
export const getCommentById = (id) => (state) => {
    if (state.comments.entities) {
        return state.comments.entities.find((p) => p.id === id);
    }
};

export const getCommentListById = (id) => (state) => {
    if (state.comments.entities) {
        return state.comments.entities.filter((p) => p.postId === id);
    }
};

export default commentsReducer;
