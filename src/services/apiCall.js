import axios from "axios";

export const LoginService = async ({ email, password }) =>
  axios.post("/api/auth/login", { email, password });

export const SignUpService = async ({ fName, lName, email, password }) =>
  axios.post("/api/auth/signup", { fName, lName, email, password });

export const ProductService = async () => axios.get("/api/products");

export const CategoryService = async () => axios.get("/api/categories");

export const FetchProductDetailsService = async (id) =>
  axios.get(`/api/products/${id}`);

export const AddToWishlistService = async (product, encodedToken) =>
  axios.post(
    "/api/user/wishlist",
    { product },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const DeleteFromWishlistService = async (productId, encodedToken) =>
  axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const AddToCartService = async (product, encodedToken) =>
  axios.post(
    "/api/user/cart",
    { product },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const DeleteFromCartService = async (productId, encodedToken) =>
  axios.delete(`/api/user/cart/${productId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const QuantityChangeService = async (productId, encodedToken, action) =>
  axios.post(
    `/api/user/cart/${productId}`,
    { action },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );
