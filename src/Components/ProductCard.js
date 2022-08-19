import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../redux/index";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { deleteProduct, addProductToCart, addProductToWishlist } =
    bindActionCreators(actions, dispatch);
  const navigate = useNavigate();
  const productID = product.id;

  function deleteProductData(id) {
    deleteProduct(id);
    const productArray = JSON.parse(localStorage.getItem("productObj")) ?? [];
    const finalArray = productArray.filter((product) => product.id !== id);
    let cartArray = JSON.parse(localStorage.getItem("cartObj")) ?? [];
    let wishlistArray = JSON.parse(localStorage.getItem("wishlistObj")) ?? [];
    cartArray = cartArray.filter((product) => product.id !== id);
    wishlistArray = wishlistArray.filter((product) => product.id !== id);
    localStorage.setItem("productObj", JSON.stringify(finalArray));
    localStorage.setItem("cartObj", JSON.stringify(cartArray));
    localStorage.setItem("wishlistObj", JSON.stringify(wishlistArray));
  }

  function addProductDataToCart(product) {
    const productArray = JSON.parse(localStorage.getItem("cartObj")) ?? [];
    const productIndex = productArray
      .map((product) => product.id)
      .indexOf(product.id);
    const cartProductObj = {
      id: product.id,
      productName: product.productName,
      productImage: product.productImage,
      productDescription: product.productDescription,
      productPrice: product.productPrice,
      productCategory: product.productCategory,
      productRating: product.productRating,
      productCount: 1,
    };

    if (productIndex === -1) {
      productArray.push(cartProductObj);
    } else {
    }
    localStorage.setItem("cartObj", JSON.stringify(productArray));
    addProductToCart(product);
  }
  function addProductDataToWishlist(product) {
    const productArray = JSON.parse(localStorage.getItem("wishlistObj")) ?? [];
    const productIndex = productArray
      .map((product) => product.id)
      .indexOf(product.id);
    if (productIndex === -1) {
      productArray.push(product);
      localStorage.setItem("wishlistObj", JSON.stringify(productArray));
      addProductToWishlist(product);
    } else {
      alert("Product already present in your Wishlist!");
    }
  }
  return (
    <Card
      style={{ width: "100%", boxSizing: "border-box", height: "600px" }}
      className="my-5 mx-3"
    >
      <Card.Img
        variant="top"
        src={product.productImage}
        style={{ width: "100%", height: "300px" }}
      />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Subtitle>Price: {product.productPrice}/-</Card.Subtitle>
        <Card.Text>{product.productDescription}</Card.Text>
        <Card.Text>Category: {product.productCategory.toUpperCase()}</Card.Text>
        <Card.Text>Rating: {product.productRating}</Card.Text>
        <Button
          variant="success"
          className="me-2 btn-lg"
          onClick={() =>
            navigate(`/editProduct/${product.id}`, { state: product })
          }
        >
          Edit
        </Button>
        <Button
          variant="danger"
          className="btn-lg"
          onClick={() => deleteProductData(productID)}
        >
          Delete
        </Button>
        <br />
        <Button
          variant="primary"
          className="btn-lg my-2 mx-2"
          onClick={() => {
            addProductDataToCart(product);
          }}
        >
          Add to Cart
        </Button>

        <Button
          variant="secondary"
          className="btn-lg"
          onClick={() => {
            addProductDataToWishlist(product);
          }}
        >
          Add To Wishlist
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
