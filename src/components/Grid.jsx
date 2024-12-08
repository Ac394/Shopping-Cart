import styled from "styled-components";
import GridItem from "./GridItem";

export default function Grid() {
  const products = [1, 2, 3, 4];

  return (
    <GridSection>
      <GridTitle>
        <h2>New Arrivals</h2>
        <hr />
      </GridTitle>
      <GridContainer>
        {products.map((productId) => (
          <GridItem productId={productId} key={productId} />
        ))}
      </GridContainer>
    </GridSection>
  );
}

const GridSection = styled.div`
  padding: 0 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  max-width: 1440px;
`;

const GridTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  & > h2 {
    font-size: 36px;
    font-family: "EB Garamond", serif;
    font-weight: 300;
    flex-shrink: 0;
  }

  & > hr {
    width: 100%;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-top: 15px;
`;
