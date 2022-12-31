import commentsReducer from "./comments";
import postsReducer from "./posts";
import renderReducer from "./renderList";
import usersReducer from "./users";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer,
    render: renderReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
};
