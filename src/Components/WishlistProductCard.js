import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../redux/index";

function WishlistProductCard({ product }) {
  const dispatch = useDispatch();
  const { removeProductFromWishlist } = bindActionCreators(actions, dispatch);

  const productID = product.id;
  //   console.log("Card Data", product);

  function removeProductDataFromWishlist(id) {
    console.log(id);
    removeProductFromWishlist(id);
    const productArray = JSON.parse(localStorage.getItem("wishlistObj")) ?? [];
    console.log(productArray.map((product) => product.id));
    const productIndex = productArray.map((product) => product.id).indexOf(id);
    console.log(productIndex);
    const finalArray = productArray.filter((product) => product.id !== id);
    localStorage.setItem("wishlistObj", JSON.stringify(finalArray));
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
            removeProductDataFromWishlist(productID);
          }}
        >
          Remove from Wishlist
        </Button>
      </Card.Body>
    </Card>
  );
}

export default WishlistProductCard;
