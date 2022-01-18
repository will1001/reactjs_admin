import axios from "axios";

const BASE_URL = "https://willflix.herokuapp.com/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTJiNTE1Y2JkOTU1MmU1ODllZjA3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjMxNzM0NSwiZXhwIjoxNjQyNzQ5MzQ1fQ.CIt09ZYYuzrlBiF9YjE8WxvGNBpEonH-lpjoOs3I5A0";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
