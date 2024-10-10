import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], // List of all registered users
  currentUser: null, // The currently logged-in user
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

export const { registerUser, setCurrentUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
