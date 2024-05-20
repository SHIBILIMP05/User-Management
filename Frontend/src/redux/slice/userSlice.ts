import { createSlice } from "@reduxjs/toolkit"

interface userState {
    name: string
    email: string
    id: string
    is_admin: boolean
    phone:string
    image:string
    location:string

}

const initialState: userState = {
    name: '',
    email: '',
    id: '',
    is_admin: false,
    phone:"",
    image:"",
    location:""
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
            state.phone=action.payload.phone
            state.image=action.payload.image
            state.location= action.payload.location
        }
    }

})


export const { userDetails } = userSlice.actions
export default userSlice.reducer;