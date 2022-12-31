import { createSlice } from "@reduxjs/toolkit";

const renderSlice = createSlice({
    name: "render",
    initialState: {
        entities: {
            postsRender: false,
            commentsRender: false
        },
        error: null
    },
    reducers: {
        postsListRender: (state, action) => {
            state.entities.postsRender = !state.entities.postsRender;
        },
        commentsListRender: (state, action) => {
            state.entities.commentsRender = !state.entities.commentsRender;
        }
    }
});

const { reducer: renderReducer, actions } = renderSlice;
export const { postsListRender, commentsListRender } = actions;
export const getStatusCommentsRender = () => (state) => state.render.entities.commentsRender;
export const getStatusPostsRender = () => (state) => state.render.entities.postsRender;

export default renderReducer;
