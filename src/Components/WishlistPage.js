import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../redux/index";
import WishlistProductCard from "./WishlistProductCard";

function WishlistPage() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();
  const { getProductsForWishlist } = bindActionCreators(actions, dispatch);

  useEffect(() => {
    getProductsForWishlist(JSON.parse(localStorage.getItem("wishlistObj")));
    setProductData(JSON.parse(localStorage.getItem("wishlistObj")));
    // console.log(productData);
  }, []);
  return (
    <Container>
      <Row className="mb-5 mt-3 text-center">
        <Col>
          <h1 className="text-success">Your Wishlist details</h1>
          <h3 className="text-secondary">You can order these products later</h3>
        </Col>
      </Row>
      <Row
        style={{
          border: "3px solid #999",
          borderRadius: ".5rem",
          padding: "2rem 1rem",
        }}
      >
        <Col>
          <Button onClick={() => navigate("/")}>Back to Inventory</Button>
        </Col>
        <Col>
          <Button onClick={() => navigate("/cart")} variant="success">
            Go to Cart
          </Button>
        </Col>
      </Row>
      {productData?.length === 0 ? (
        <Row>
          <Col>
            <div>
              <h1>No Products Found!</h1>
            </div>
          </Col>
        </Row>
      ) : (
        <Row>
          {productData.length !== 0 &&
            productData?.map((product) => (
              <Col xs={12} sm={6} lg={4} key={product.id}>
                <WishlistProductCard product={product} />
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
}

export default WishlistPage;
