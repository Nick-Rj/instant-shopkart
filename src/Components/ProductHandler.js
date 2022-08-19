import React, { useEffect, useState } from "react";
import {
  FloatingLabel,
  Container,
  Form,
  Row,
  Button,
  Col,
} from "react-bootstrap";
import { useNavigate, useParams, useLocation } from "react-router-dom";

function ProductHandler() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState("");
  const [productRating, setProductRating] = useState(0);

  useEffect(() => {
    const product = location.state;
    if (id !== undefined) {
      setProductName(product.productName);
      setProductImage(product.productImage);
      setProductDescription(product.productDescription);
      setProductPrice(product.productPrice);
      setProductCategory(product.productCategory);
      setProductRating(product.productRating);
    }
  }, [id, location.state]);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const handleSubmit = (e) => {
    const productObj = {
      id: id === undefined ? new Date().getTime().toString() : id,
      productName,
      productImage,
      productDescription,
      productPrice,
      productCategory,
      productRating,
    };

    const productArray = JSON.parse(localStorage.getItem("productObj")) ?? [];
    if (id === undefined) {
      productArray.push(productObj);
      localStorage.setItem("productObj", JSON.stringify(productArray));
    } else {
      const newProductArray = [];
      productArray.forEach((element) => {
        if (element.id === id) {
          newProductArray.push(productObj);
        } else {
          newProductArray.push(element);
        }
      });
      localStorage.setItem("productObj", JSON.stringify(newProductArray));
    }
    e.preventDefault();
    navigate("/");
  };
  return (
    <Container>
      <Row className="mb-5 mt-3 text-center">
        <Col>
          <h1 className="text-success">Add/Edit your Product</h1>
          <h3 className="text-secondary">
            Add your favourite products through this form.
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form
            onSubmit={handleSubmit}
            style={{
              border: "3px solid #999",
              borderRadius: ".5rem",
              padding: "2rem 1rem",
            }}
          >
            <Form.Group className="mb-3" controlId="productName">
              <FloatingLabel
                controlId="productName"
                label="Product Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Enter Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="productImage">
              <FloatingLabel controlId="productImage" label="Product Image">
                <Form.Control
                  type="file"
                  placeholder="Select an Image"
                  onChange={async (e) => {
                    const file = e.target.files[0];
                    console.log(file);
                    const base64 = await convertBase64(file);
                    console.log(base64);
                    setProductImage(base64);
                  }}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="productDescription">
              <FloatingLabel
                controlId="productDescription"
                label="Product Description"
              >
                <Form.Control
                  as={"textarea"}
                  type="textarea"
                  placeholder="Enter Product Description"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="productPrice">
              <FloatingLabel controlId="productPrice" label="Product Price">
                <Form.Control
                  type="number"
                  min={0}
                  placeholder="Product Price"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="mb-3" controlId="productCategory">
              <Form.Select
                aria-label="Product Categories"
                required
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              >
                <option>Select a Category</option>
                <option value="phones">Phones</option>
                <option value="computers">Computers</option>
                <option value="books">Books</option>
                <option value="bags">Bags</option>
                <option value="watches">Watches</option>
                <option value="shoes">Shoes</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="productRating">
              <FloatingLabel controlId="productRating" label="Product Rating">
                <Form.Control
                  type="number"
                  min={0}
                  max={5}
                  placeholder="Password"
                  value={productRating}
                  onChange={(e) => setProductRating(e.target.value)}
                  required
                />
              </FloatingLabel>
            </Form.Group>
            <Button variant="primary" type="submit" className="mx-3">
              Submit
            </Button>
            <Button
              variant="secondary"
              type="submit"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductHandler;
