import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CartProductCard from "./CartProductCard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../redux/index";

function CartPage() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();
  const { getProductsForCart } = bindActionCreators(actions, dispatch);

  useEffect(() => {
    getProductsForCart(JSON.parse(localStorage.getItem("cartObj")));
    setProductData(JSON.parse(localStorage.getItem("cartObj")));
  }, []);
  return (
    <Container>
      <Row className="mb-5 mt-3 text-center">
        <Col>
          <h1 className="text-success">Your Cart details</h1>
          <h3 className="text-secondary">
            Please checkout and confirm your order
          </h3>
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
          <Button onClick={() => navigate("/wishlist")} variant="success">
            Go to Wishlist
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
                <CartProductCard product={product} />
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
}

export default CartPage;
