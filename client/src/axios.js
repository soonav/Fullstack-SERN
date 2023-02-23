// import axios from "axios";
// import _ from "lodash";

// const insance = axios.create({
//   baseURL: "http://localhost:9000/",
//   withCredentials: true,
// });
// const createError = (
//   httpStatusCode,
//   statusCode,
//   errorMessage,
//   problems,
//   errorCode = ""
// ) => {
//   const error = new Error();
//   error.httpStatusCode = httpStatusCode;
//   error.statusCode = statusCode;
//   error.errorMessage = errorMessage;
//   error.problems = problems;
//   error.errorCode = errorCode;
//   return error;
// };
// export const isSuccessStatusCode = (s) => {
//   const statusType = typeof s;
//   return (
//     (statusType === "number" && s === 0) ||
//     (statusType === "string" && s.toUpperCase)
//   );
// };

// export default axios;

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000/",
  // headers: {
  //   "Content-Type": "application/json",
  //   Authorization: "Bearer " + localStorage.getItem("token"),
  // },
});

export default instance;
