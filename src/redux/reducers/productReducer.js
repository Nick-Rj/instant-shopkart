const initialState = [];
const productReducer = (state = initialState, action) => {
  let id = null;
  switch (action.type) {
    case "getProducts":
      return action.payload;

    case "addProduct":
      return state.push(action.payload);

    case "deleteProduct":
      id = action.payload;
      //   const productIndex = state.map((product) => product.id).indexOf(id);
      const finalArray = state.filter((product) => product.id !== id);
      return finalArray;

    case "editProduct":
      id = action.payload.id;
      const newProductArray = [];
      state.forEach((element) => {
        if (element.id === id) {
          newProductArray.push(action.payload);
        } else {
          newProductArray.push(element);
        }
      });
      return newProductArray;

    default:
      return state;
  }
};

export default productReducer;
