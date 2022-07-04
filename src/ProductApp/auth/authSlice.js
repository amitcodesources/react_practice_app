import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { user:null, token:null },
    reducers: {
        setCredentials: (state, action) =>{
            const { user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
        },
        logout: (state, action) =>{
            state.user = user
            state.token = null
        }

        
    }
})