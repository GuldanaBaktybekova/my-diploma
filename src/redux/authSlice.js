import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const key = "AIzaSyBVrFL1xbXHQK6cIu1OLpcXEv6qBC2Ok04";
const signInUrl = "https://identitytoolkit.googleapis.com/v1/accpunts:signInWithPassword?key=" + key;
const signUpUrl = "https://identitytoolkit.googleapis.com/v1/accpunts:signUp?key=" + key;
 export const start = createAsyncThunk('auth/start', (data, thunkAPI)=>{
  //TODO

});

const authSlice = createSlice({
  name: "auth",

initialState: {
  localId: null,
  idToken: null,
  error: null,
  loading: false,

},
reducers: {
  init: (state, action) => {},
  success: (state, action) => {},
  loading: (state, action) => {},
  error: (state, action) => {},

}
});

export default authSlice.reducer;
