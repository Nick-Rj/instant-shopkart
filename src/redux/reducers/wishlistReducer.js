const initialState = [];
const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getProductsForWishlist":
      return action.payload;

    case "addProductToWishlist":
      return state.push(action.payload);

    case "removeProductFromWishlist":
      const id = action.payload;
      const finalArray = state.filter((product) => product.id !== id);
      return finalArray;

    default:
      return state;
  }
};

export default wishlistReducer;
