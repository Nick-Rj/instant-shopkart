import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../redux/index";

function ProductInventory() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [ratingValue, setRatingValue] = useState(0);
  const products = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();
  const { getProducts } = bindActionCreators(actions, dispatch);

  useEffect(() => {
    getProducts(JSON.parse(localStorage.getItem("productObj")));
    setFilteredProducts(JSON.parse(localStorage.getItem("productObj")));
    setProductData(JSON.parse(localStorage.getItem("productObj")));
  }, []);

  const filterProducts = (product, searchString) => {
    const result = product.productName
      .toLowerCase()
      .includes(searchString.toLowerCase());
    return result;
  };

  const searchHandler = (searchedString) => {
    const result =
      searchedString === ""
        ? [...products]
        : [
            ...products.filter((product) =>
              filterProducts(product, searchedString)
            ),
          ];

    setFilteredProducts(result);
  };

  const sortWithHigherPrice = () => {
    const finalArray = [...productData];
    finalArray.sort((a, b) => b.productPrice - a.productPrice);

    setFilteredProducts([...finalArray]);
  };

  const sortWithLowerrPrice = () => {
    const finalArray = [...productData];
    finalArray.sort((a, b) => a.productPrice - b.productPrice);

    setFilteredProducts([...finalArray]);
  };

  const filterWithRating = (rating) => {
    let finalArray = [...productData];
    finalArray = finalArray.filter((product) => {
      return product.productRating === rating;
    });

    setFilteredProducts(finalArray);
  };

  return (
    <Container fluid>
      <Row className="mb-5 mt-3 text-center">
        <Col>
          <h1 className="text-success">Welcome to Instant ShopKart</h1>
          <h3 className="text-secondary">Fabulous deals on Latest Products</h3>
        </Col>
      </Row>
      <Row
        className="mb-3"
        style={{
          border: "3px solid #999",
          borderRadius: ".5rem",
          padding: "1rem",
        }}
      >
        <Col xs={12} md={6} lg={4}>
          <Button onClick={() => navigate("addProduct")}>Add Product</Button>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Button onClick={() => navigate("cart")} variant="success">
            Go to Cart
          </Button>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <Button onClick={() => navigate("wishlist")} variant="warning">
            Wishlist
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="text"
            className="w-100 py-2 px-3"
            placeholder="Search your product"
            value={searchString}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchString(e.target.value);
              searchHandler(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row
        className="my-3"
        style={{
          border: "3px solid #999",
          borderRadius: ".5rem",
          padding: "1rem",
        }}
      >
        <Col xs={12}>
          <h3>Filters</h3>
          <hr />
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Button onClick={() => sortWithHigherPrice()}>Higher Price</Button>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Button onClick={() => sortWithLowerrPrice()}>Lower Price</Button>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <p
            className="mr-2"
            style={{ display: "inline-block", paddingRight: "10px" }}
          >
            Product Rating:
          </p>
          <select
            value={ratingValue}
            onChange={(e) => {
              setRatingValue(e.target.value);
              filterWithRating(e.target.value);
            }}
            className={"w-25"}
            placeholder="Product Rating"
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <Button
            onClick={() => {
              setRatingValue(0);
              setFilteredProducts(productData);
            }}
          >
            Reset Filters
          </Button>
        </Col>
      </Row>
      {filteredProducts?.length === 0 ? (
        <Row>
          <Col>
            <div>
              <h1>No Products Found!</h1>
            </div>
          </Col>
        </Row>
      ) : (
        <Row>
          {filteredProducts?.map((product) => (
            <Col xs={12} sm={6} lg={4} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default ProductInventory;
