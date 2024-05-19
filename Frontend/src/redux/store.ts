import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


const rootReducer = combineReducers({
    User: userSlice
})

const persistConfig = {
    key: 'root',
    storage,
    version: 1
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor=persistStore(store)
export type RootState = ReturnType<typeof store.getState>;