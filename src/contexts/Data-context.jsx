import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { actionTypes } from "../reducers/actionTypes";
import { DataReducer, initialState } from "../reducers/reducer";
import { CategoryService, ProductService } from "../services/apiCall";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [editAddress, setEditAddress] = useState({});
  useEffect(() => {
    {
      (async () => {
        const { status: prodStatus, data: prodData } = await ProductService();

        if (prodStatus === 200 || prodStatus === 201) {
          dispatch({
            type: actionTypes.SET_PRODUCTS,
            payload: { products: prodData?.products },
          });
        }

        const { status: categoryStatus, data: categoryData } =
          await CategoryService();

        if (categoryStatus === 200 || categoryStatus === 201) {
          dispatch({
            type: actionTypes.SET_CATEGORIES,
            payload: { categories: categoryData?.categories },
          });
        }
      })();
    }
  }, []);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        loader,
        setLoader,
        showAddressModal,
        setShowAddressModal,
        editAddress,
        setEditAddress,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
