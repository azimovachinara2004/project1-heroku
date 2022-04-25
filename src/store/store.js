import {configureStore} from '@reduxjs/toolkit'
import flowersSlice from '../components/homeSlice'


const store= configureStore({
  reducer:{
      flowers:flowersSlice.reducer
  }
   
})
export default store