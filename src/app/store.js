import { configureStore } from '@reduxjs/toolkit'
import { inventoryReducer } from '../features/inventoryReducer'

export default configureStore({
  reducer: {
    inventory: inventoryReducer.reducer
  }
})
