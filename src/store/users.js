import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../api/users.api";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        entities: [],
        error: null
    },
    reducers: {
        usersReceved: (state, action) => {
            state.entities = action.payload;
        }
    }
});

const { reducer: usersReducer, actions } = usersSlice;
const { usersReceved } = actions;
export const getUser = () => (state) => state.users.entities;
export const loadUsersList = () => async (dispatch) => {
    try {
        const content = await getUsers();
        dispatch(usersReceved(content));
    } catch (error) {
       console.log(error.message);
    }
};
export const getUserbyId = (id) => (state) => {
    if (state.users.entities) {
        return state.users.entities.find((p) => p.id === id);
    }
};

export default usersReducer;
