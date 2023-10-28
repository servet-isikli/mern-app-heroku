import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../redux/actions/productActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const createdProduct = useSelector((state) => state.products.createdProduct);

  const initialFormData = {
    name: "",
    description: "",
    price: "",
    imageSrc: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(formData));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="imageSrc">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          name="imageSrc"
          value={formData.imageSrc}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create Product
      </Button>
      {createdProduct && <p>Product created with ID: {createdProduct._id}</p>}
    </Form>
  );
};

export default CreateProduct;
