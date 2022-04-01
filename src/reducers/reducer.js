import { actionTypes } from "./actionTypes";

export const initialState = {
  filters: {
    sortBy: "",
    categories: {},
    rating: "",
    search: "",
    priceRange: 0,
  },
  products: [],
  wishlist: [],
  cart: [],
  categories: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload.products],
      };

    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload.categories],
      };

    case actionTypes.SET_CART:
      return {
        ...state,
        cart: [...action.payload.cart],
      };

    case actionTypes.SET_WISHLIST:
      return {
        ...state,
        wishlist: [...action.payload.wishlist],
      };

    default:
      return state;
  }
};
