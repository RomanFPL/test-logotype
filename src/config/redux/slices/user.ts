import { createSlice } from "@reduxjs/toolkit";

interface IAchievement {
  value: number;
  total: number;
}

interface IAdditions {
  users: number;
  pages: number;
  images: string[];
}

export interface IUser {
  id: number;
  firstName: string;
  secondName: string;
  level: number;
  progress: number;
  role: string;
  imgUrl: string;
  language: string;
  courses: IAchievement;
  book: IAchievement;
  folder: IAchievement;
  additions: IAdditions;
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
