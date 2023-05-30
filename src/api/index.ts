import axios from "axios";
import { IUser } from "config/redux/slices/user";

const apiUrl = process.env.REACT_APP_API_URL;
// TODO write auth logic here

// const apiUrl = "https://example.com/api";
// const token = localStorage.getItem("token");

// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

interface ITable {
  data: [IUser];
}

const fetchUser = (tabId: string): Promise<ITable> => {
  return axios({
    method: "get",
    url: apiUrl,
    params: {
      tabId: tabId,
    },
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export { fetchUser };
