import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api/index";
import { IUser, setUser } from "../config/redux/slices/user";
import { useDispatch } from "react-redux";

import abs2 from "assets/images/abs2.png";
import abs1 from "assets/images/abs1.png";

const imgs = [
  abs2,
  abs1,
  abs1,
  abs2,
  abs2,
  abs1,
  abs1,
  abs2,
  abs2,
  abs1,
  abs1,
  abs2,
];

const initData = {
  firstName: "Peter",
  level: 6,
  progress: 40,
  id: 1,
  secondName: "g",
  role: "admin",
  imgUrl: "",
  courses: { total: 12, value: 10 },
  folder: { total: 15, value: 11 },
  book: { total: 15, value: 11 },
  additions: { users: 12, pages: 3452, images: imgs },
};

const placeholder = {
  data: [initData],
};

const useUserData = () => {
  const dispatch = useDispatch();
  const addUserData = (data: IUser) => dispatch(setUser(data));

  const { data, isLoading } = useQuery(
    ["user", "id"],
    async () => {
      // return fetchUser("user");
      return null;
    },
    {
      select: (data) => {
        return {
          initData,
          // ...data.data[0],
        };
      },
      placeholderData: placeholder,
      refetchInterval: 10000,
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  if (data && !isLoading) {
    addUserData(placeholder.data[0]);
  }

  return { data, isLoading };
};

export default useUserData;
