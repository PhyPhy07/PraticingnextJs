import AddToCart from './AddToCart'
import React from 'react'
import styles from './ProductCard.module.css'

styles.card 
const ProductCard = () => {
  return (
    <div className={styles.card}>
<AddToCart />
  </div>
);
};

export default ProductCard

//to make faster we need to only use client components for the parts that are needed to be dynamic