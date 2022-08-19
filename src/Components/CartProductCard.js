import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../redux/index";

function CartProductCard({ product }) {
  const dispatch = useDispatch();
  const { removeProductFromCart } = bindActionCreators(actions, dispatch);
  const productID = product.id;

  function removeProductDataFromCart(id) {
    removeProductFromCart(id);
    const productArray = JSON.parse(localStorage.getItem("cartObj")) ?? [];
    const finalArray = productArray.filter((product) => product.id !== id);
    localStorage.setItem("cartObj", JSON.stringify(finalArray));
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
          variant="secondary"
          className="btn-lg"
          onClick={() => {
            removeProductDataFromCart(productID);
          }}
        >
          Remove from Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CartProductCard;
