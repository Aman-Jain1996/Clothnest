import axios from "axios";

// Auth Service

export const LoginService = async ({ email, password }) =>
  axios.post("/api/auth/login", { email, password });

export const SignUpService = async ({ firstName, lastName, email, password }) =>
  axios.post("/api/auth/signup", { firstName, lastName, email, password });

export const ResetPasswordService = async ({ email, password }) =>
  axios.post("/api/auth/reset", { email, password });

// Category Service

export const CategoryService = async () => axios.get("/api/categories");

// Products Service

export const ProductService = async () => axios.get("/api/products");

export const FetchProductDetailsService = async (id) =>
  axios.get(`/api/products/${id}`);

// Wishlist Service

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

// Cart Services

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

export const ClearCartService = async (encodedToken) =>
  axios.delete("/api/user/cart/clear", {
    headers: { authorization: encodedToken },
  });

// Address Services

export const AddAddressServive = async (address, encodedToken) =>
  axios.post(
    "/api/user/address",
    { address },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const DeleteAddressServive = async (addressId, encodedToken) =>
  axios.delete(`/api/user/address/${addressId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const UpdateAddressServive = async (addressId, address, encodedToken) =>
  axios.post(
    `/api/user/address/${addressId}`,
    { address },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

// Orders service routes

export const getOrdersService = async (encodedToken) =>
  axios.get(
    "/api/user/orders",
    {},
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const AddToOrdersService = async (encodedToken, order) =>
  axios.post(
    "/api/user/orders",
    { order },
    { headers: { authorization: encodedToken } }
  );
