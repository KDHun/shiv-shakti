import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {Token:null,isLoggedIn:false},
  reducers: {
    login(state, action) {
      console.log(action.payload);
      return {Token:action.payload.Token,isLoggedIn:true};
    },
    logout() {
      return {Token:null,isLoggedIn:false};
    }
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;