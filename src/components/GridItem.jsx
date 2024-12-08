import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import useFetch from "react-fetch-hook";
import { useState } from "react";

export default function GridItem({ productId }) {
  // const [image, setImage] = useState(null);

  const { isLoading, data, error } = useFetch(`http://localhost:3000/products/${productId}`);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  // if (!image) setImage(data.images[0]);

  return (
    <ProductNavLink
      to={`/product/${productId}`}
      // onMouseEnter={() => setImage(data.images[1])}
      // onMouseOut={() => setImage(data.images[0])}
    >
      <ProductImage>
        <img src={data.images[0]} alt="" />
        <img src={data.images[1]} alt="" />
      </ProductImage>
      <ProductDetails>
        <p>{data.title}</p>
        <p>{data.price}€</p>
      </ProductDetails>
    </ProductNavLink>
  );
}

//  Styling
const ProductNavLink = styled(NavLink)`
  color: black;
  font-size: 24px;
  font-family: "EB Garamond", serif;
  text-decoration: none;
`;

const ProductImage = styled.div`
  position: relative;
  overflow: hidden;

  & img:nth-of-type(1) {
    position: absolute;
  }

  & img:nth-of-type(2) {
    opacity: 0;
  }

  &:hover img:nth-of-type(2) {
    opacity: 1;
    transition: opacity 0.3s, transform 2s;
    transition-timing-function: ease;
    transform: scale(1.03);
  }
`;

const ProductDetails = styled.div`
  & p:nth-of-type(2) {
    font-size: 18px;
  }
`;

// Prop Types
GridItem.propTypes = {
  productId: PropTypes.number.isRequired,
};
