import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <FooterSection>
      <hr />
      <FooterContainer>
        <div>
          <Logo src="src/assets/icons/venice_logo.svg" />
          {/* <p>Where style begins.</p> */}
        </div>
        <div>
          <h4>CATEGORIES</h4>
          <NavLink to="/women">Women</NavLink>
          <NavLink to="/men">Men</NavLink>
        </div>
        <Social>
          <h4>SOCIAL</h4>
          <div>
            <a href="">
              <img src="src/assets/icons/facebook.png" />
            </a>
            <a href="">
              <img src="src/assets/icons/instagram.png" />
            </a>
          </div>
        </Social>
      </FooterContainer>
    </FooterSection>
  );
}

const FooterSection = styled.section`
  max-width: 1440px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 150px;
`;

const FooterContainer = styled.footer`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 15px 30px;
  font-size: 20px;

  & div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  & a {
    color: black;
    font-size: 18px;
    text-decoration: none;
  }
`;

const Logo = styled.img`
  max-width: 100px;
`;

const Social = styled.div`
  & div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & a {
      width: 30px;
    }
  }
`;
