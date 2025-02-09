import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/counterSlice'
export const store=configureStore({ //step 1
    reducer:{
        counter:counterReducer //step 4
    },
})

// step 1:create store
// step 2:wrap app component under Provider
// step 3:create Slice
// step 4:register reducer in store 