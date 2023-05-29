import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  id: number;
  firstName: string;
  secondName: string;
  level: number;
  role: string;
  imgUrl: string;
  language: string;
}

const initialState: IUser = {} as IUser;

const notifications = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    removeUser: (state, action) => ({
      ...state,
      user: initialState,
    }),
  },
});

export default notifications.reducer;

export const { setUser } = notifications.actions;
