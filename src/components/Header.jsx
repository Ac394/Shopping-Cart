import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <Navbar>
        <NavbarLink to="/">
          <Logo src="src/assets/icons/venice_logo.svg" />
        </NavbarLink>
        <ButtonContainer>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/men">Men</NavbarLink>
          <NavbarLink to="/women">Women</NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
        </ButtonContainer>
      </Navbar>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 30px;
  z-index: 10;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const NavbarLink = styled(NavLink)`
  font-size: 18px;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  max-width: 120px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;
