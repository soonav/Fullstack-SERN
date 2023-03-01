import instance from "../axios";
const handleLoginApi = (email, password) => {
  return instance.post("/api/login", {
    email,
    password,
  });
};

export { handleLoginApi };
