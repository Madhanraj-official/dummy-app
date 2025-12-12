import { createSlice, configureStore } from "@reduxjs/toolkit"
import increment from "./Counter.js"
import user from "./UserInput.js"
let initialState = { count:0 }

const incrementSlise = createSlice({
    name:"counter",
    initialState,
    reducers :{
        incramentReducer:(state) => { state.count += 1},
        decrementReducer: (state) => {state.count -= 1},
        resetReducer: (state) => {state.count = 0}
    }
})


export const { incramentReducer,decrementReducer,resetReducer  } = incrementSlise.actions

export const store = configureStore(
    {
        reducer:{
            counter: increment.reducer,
            user:user.reducer
         }
    }
)