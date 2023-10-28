import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { deleteProduct, fetchProducts } from "../redux/actions/productActions"; // Redux eylemlerini ekleyin

const ProductDelete = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.products.find((p) => p._id === productId)
  );

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts(productId)); // Ürün verilerini Redux store'dan yükleme
  }, [dispatch, productId]);

  const handleDelete = () => {
    dispatch(deleteProduct(productId));
    // Ürün başarıyla silindiğinde Alert göster
    setShowAlert(true);
  };

  return (
    <div>
      {product ? (
        <Card>
          <Card.Img variant="top" src={product.imageSrc} alt={product.name} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Price: ${product.price}</Card.Text>
            <div>
              <Button variant="danger" onClick={handleDelete}>
                Delete Product
              </Button>
              <Link to={`/update/${productId}`}>
                <Button variant="primary">Edit Product</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <div>
          <p>Product not found</p>
        </div>
      )}
      {showAlert && (
        <Alert variant="success">Product deleted successfully</Alert>
      )}
    </div>
  );
};

export default ProductDelete;
