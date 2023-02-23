import instance from "../axios";
const handleLoginApi = (email, password) => {
  console.log("email password", password);
  return instance.post("/api/login", {
    email,
    password,
  });
};

export { handleLoginApi };
