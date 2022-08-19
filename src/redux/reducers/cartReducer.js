const initialState = [];
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getProductsForCart":
      return action.payload;

    case "addProductToCart":
      return state.push(action.payload);

    case "removeProductFromCart":
      const id = action.payload;
      const finalArray = state.filter((product) => product.id !== id);
      return finalArray;

    default:
      return state;
  }
};

export default cartReducer;
