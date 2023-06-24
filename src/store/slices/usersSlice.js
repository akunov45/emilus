import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk("users/fetchUsers", async (_, { rejectWithValue }) => {
  try {
    const request = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await request.json()
    return response
  } catch (error) {
    return rejectWithValue(error)
  }
})

const initialState = {
  usersData: [],
  status: '',
  error: ''
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.usersData = [...payload];
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = `Error fetching Users Data! ${payload}`
      });
  }
})

export default usersSlice.reducer