import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductDelete from "../components/ProductDelete";

const ProductDetailPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} className="text-center">
            <h1>Product Detail</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <ProductDelete />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetailPage;
