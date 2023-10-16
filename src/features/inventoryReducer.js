import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchInventory = createAsyncThunk(
  'inventory/fetchInventory',
  async () => {
    const response = await axios.get(
      'https://inventory-and-sales-api.harshv1741.repl.co/inventories'
    )
    return response.data
  }
)

export const inventoryReducer = createSlice({
  name: 'inventory',
  initialState: {
    inventory: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchInventory.pending]: state => (state.status = 'loading'),
    [fetchInventory.fulfilled]: (state, action) => {
      state.status = 'success'
      state.invenotry = action.payload.inventory
    },
    [fetchInventory.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    }
  }
})
