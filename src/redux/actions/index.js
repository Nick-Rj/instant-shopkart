export const getProducts = (products) => {
  return (dispatch) => {
    dispatch({
      type: "getProducts",
      payload: products,
    });
  };
};

export const addProduct = (product) => {
  return (dispatch) => {
    dispatch({
      type: "addProducts",
      payload: product,
    });
  };
};

export const editProduct = (product) => {
  return (dispatch) =>
    dispatch({
      type: "editProduct",
      payload: product,
    });
};

export const deleteProduct = (id) => {
  return (dispatch) =>
    dispatch({
      type: "deleteProduct",
      payload: id,
    });
};

export const getProductsForCart = (products) => {
  return (dispatch) => {
    dispatch({
      type: "getProductsForCart",
      payload: products,
    });
  };
};

export const addProductToCart = (product) => {
  return (dispatch) =>
    dispatch({
      type: "addProductToCart",
      payload: product,
    });
};

export const removeProductFromCart = (id) => {
  return (dispatch) => dispatch({ type: "removeProductFromCart", payload: id });
};

export const getProductsForWishlist = (products) => {
  return (dispatch) => {
    dispatch({
      type: "getProductsForWishlist",
      payload: products,
    });
  };
};

export const addProductToWishlist = (product) => {
  return (dispatch) =>
    dispatch({
      type: "addProductToWishlist",
      payload: product,
    });
};

export const removeProductFromWishlist = (id) => {
  return (dispatch) =>
    dispatch({
      type: "removeProductFromWishlist",
      payload: id,
    });
};
