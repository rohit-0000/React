import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchTodos=createAsyncThunk("fetchTodos",async ()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
})
const TodoSlice =createSlice({
    name: 'Todo',
    initialState:{
        isLoading: false,
        data: null,
        isError:false
    },
    // reducers:
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        }); 
        builder.addCase(fetchTodos.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchTodos.rejected,(state,action)=>{
            console.log('Error',action.payload);
            isError=true;
        })
    }
})

export default TodoSlice.reducer;