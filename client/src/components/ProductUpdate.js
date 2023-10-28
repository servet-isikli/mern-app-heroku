import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateProduct, fetchProducts } from "../redux/actions/productActions"; // Redux eylemlerini ekleyin
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UpdateProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.products.find((product) => product._id === productId)
  );

  const initialFormData = {
    name: "",
    description: "",
    price: "",
    imageSrc: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    dispatch(fetchProducts(productId)); // Ürün verisini Redux store'dan yükleme
  }, [dispatch, productId]);

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(productId, formData));
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
        Update Product
      </Button>
    </Form>
  );
};

export default UpdateProduct;
