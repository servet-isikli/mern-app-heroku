// ProductDetail.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../redux/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((p) => p._id === productId)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // Tüm ürünleri çekmek için fetchProducts action'ını çağırın
  }, [dispatch]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <img src={product.imageSrc} alt={product.name} />
    </div>
  );
};

export default ProductDetail;
