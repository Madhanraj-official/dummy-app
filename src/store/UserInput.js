import { createSlice } from "@reduxjs/toolkit"


let initialState = {
    user : {
        username:"",
        password:""
    }
}


const userSlise = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUsername:(state,arg)=>{state.user.username = arg.payload},
        setPassword:(state,arg)=>{state.user.password = arg.payload},
        setUsernameAndPassword:(state,arg)=>{state.user = arg.payload},
        resetUser:(state)=>{state.user = { username:"",password: ""}}
    }
})


export const { setPassword,setUsername,setUsernameAndPassword,resetUser} = userSlise.actions


export default userSlise