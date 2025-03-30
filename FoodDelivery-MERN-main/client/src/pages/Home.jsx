import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { category } from "../utils/data"; // Ensure category is correctly imported
import HeaderImage from "../utils/Images/Header.png";
import ProductCategoryCard from "../components/cards/ProductCategoryCard";
import ProductsCard from "../components/cards/ProductsCard";
import { getAllProducts } from "../api";
import { CircularProgress } from "@mui/material";

const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg};
`;

const Section = styled.div`
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Img = styled.img`
  width: 100%;
  max-width: 1200px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  @media (max-width: 760px) {
    gap: 16px;
  }
`;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await getAllProducts();
      setProducts(res.data || []); // Ensure res.data is valid
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Section>
        <Img src={HeaderImage} />
      </Section>
      <Section>
        <Title>Food Categories</Title>
        <CardWrapper>
          {category?.length > 0 ? ( // Optional chaining for category and check for empty array
            category.map((categoryItem) => (
              <ProductCategoryCard key={categoryItem.id} category={categoryItem} />
            ))
          ) : (
            <p>No categories available</p>
          )}
        </CardWrapper>
      </Section>

      <Section>
        <Title>Most Popular</Title>
        {loading ? (
          <CircularProgress />
        ) : (
          <CardWrapper>
            {products.length > 0 ? ( // Check if products array is not empty
              products.map((product) => (
                <ProductsCard key={product.id} product={product} />
              ))
            ) : (
              <p>No products available</p>
            )}
          </CardWrapper>
        )}
      </Section>
    </Container>
  );
};

export default Home;
