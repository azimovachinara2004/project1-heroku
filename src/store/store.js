import {configureStore} from '@reduxjs/toolkit'
import dataSlice from '../components/homeSlice'


const store= configureStore({
  reducer:{
      flowers:dataSlice.reducer
  }
   
})
export {store}