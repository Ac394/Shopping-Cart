import styled from "styled-components";

export default function Banner() {
  return (
    <BannerContainer>
      <TitleContainer>
        <Title>
          Your Style <br />
          Destination.
        </Title>
      </TitleContainer>
      <Image src="src/assets/images/hero_image_01.jpg" alt="" />
    </BannerContainer>
  );
}

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1440px;
`;

const Title = styled.h1`
  color: white;
  font-size: 96px;
  line-height: 82px;
  font-family: "EB Garamond", serif;
`;
