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
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products.map((prod) => ({
          ...prod,
          wished: false,
          carted: false,
        })),
      };

    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories.reduce(
          (acc, curr) => ({ ...acc, [curr.categoryName]: false }),
          {}
        ),
      };

    case actionTypes.SET_CART:
      return {
        ...state,
        cart: [...action.payload.cart],
        products: state.products.map((prod) => ({
          ...prod,
          carted: action.payload.cart.some((item) => item.id === prod.id),
        })),
      };

    case actionTypes.SET_WISHLIST:
      return {
        ...state,
        wishlist: [...action.payload.wishlist],
        products: state.products.map((prod) => ({
          ...prod,
          wished: action.payload.wishlist.some((wish) => wish.id === prod.id),
        })),
      };

    default:
      return state;
  }
};
