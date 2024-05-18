import { createSlice } from "@reduxjs/toolkit"

interface userState {
    name: string
    email: string
    id: string
    is_admin: boolean,

}

const initialState: userState = {
    name: '',
    email: '',
    id: '',
    is_admin: false,
}

const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        userDetails: (state, action) => {
            console.log("type: ", action.type);
            console.log("payload: ", action.payload);
            state.name = action.payload.name
            state.email = action.payload.email
            state.is_admin = action.payload.is_admin
            state.id = action.payload.id
        }
    }

})


export const { userDetails } = userSlice.actions
export default userSlice.reducer;