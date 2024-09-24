import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    userData: {},
    isAuth: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = action.payload
        },
        initUserData: (state) => {
            if (sessionStorage.getItem(TOKEN) !== null) {
                state.isAuth = true
            }
        },
    },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
