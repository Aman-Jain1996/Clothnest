import axios from "axios";

export const LoginService = async ({ email, password }) =>
  axios.post("/api/auth/login", { email, password });

export const ProductService = async () => axios.get("/api/products");

export const CategoryService = async () => axios.get("/api/categories");
