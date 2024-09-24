import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "entities/User";

export function createReduxStore() {
    const rootReducer = {
        user: userReducer
    }
    return configureStore({
        reducer: rootReducer
    })
}
