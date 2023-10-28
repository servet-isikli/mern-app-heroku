import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductUpdate from "../components/ProductUpdate";

const UpdateProductPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} className="text-center">
            <h1>Update Product</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <ProductUpdate />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UpdateProductPage;
