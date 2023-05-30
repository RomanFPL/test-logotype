import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  id: number;
  firstName: string;
  secondName: string;
  level: number;
  progress: number;
  role: string;
  imgUrl: string;
  language: string;
}

const initialState: IUser = {} as IUser;

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    removeUser: (state, action) => initialState,
  },
});

export default user.reducer;

export const { setUser } = user.actions;
