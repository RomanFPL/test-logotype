import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api/index";
import { IUser, setUser } from "../config/redux/slices/user";
import { useDispatch } from "react-redux";

const useUserData = () => {
  const dispatch = useDispatch();
  const addUserData = (data: IUser) => dispatch(setUser(data));

  const { data, isLoading } = useQuery(
    ["user", "id"],
    async () => {
      return fetchUser("user");
    },
    {
      select: (data) => {
        return data.data[0];
      },
      refetchInterval: 10000,
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );

  if (data && !isLoading) {
    addUserData(data);
  }

  return { data, isLoading };
};

export default useUserData;
