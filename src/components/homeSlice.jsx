import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
// createslice- incapsulate reducer



export const callToAPI = createAsyncThunk('api/flowers',async(obj,{state,error})=>{
    try{
        //const req= await fetch("https://mocki.io/v1/2e6bd16c-3c51-4984-830d-0995124d30db")
        const req = await fetch('https://mocki.io/v1/37790f6c-783d-4dbc-b99e-03b9fe2ba179')
        const res = await req.json()
        return res.flowers
    }catch(error){
        console.log(error)
        return []
    }
   
})

const flowersSlice = createSlice({
    name:"flowers",
    initialState:[],
    reducers:{},
    extraReducers:{
      [callToAPI.pending]:(state,action)=>{
          return []
      },
      [callToAPI.fulfilled]:(state,action)=>{
          return action.payload
      },
      [callToAPI.rejected]:(state,action)=>{
        return []
      }
    }
})

export const actions = flowersSlice.actions;
export default flowersSlice
