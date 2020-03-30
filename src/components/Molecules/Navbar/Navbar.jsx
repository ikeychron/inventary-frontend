import React, { useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

// Components
import Button from "../../Atoms/Button";
import Text from "../../Atoms/Text";

// styles
import Palette from "../../../theme/palette";

const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  justify-content: space-between;
  background-color: ${Palette.primary.main};
`;

const ListItem = styled.li`
  list-style: none;
  color: #8394a5;
  font-size: 14px;
  margin: 8px 0;
`;

const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  :focus {
    outline: none;
  }
`;

const MobileMenu = styled.nav`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 60px;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(63, 63, 68, 0.15);
  z-index: 10;
  background-color: #ffffff;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

const MobileMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  :hover {
    color: ${Palette.primary.main};
  }
`;

const Navbar = ({ isAuthenticated, user }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(!openMenu);

  return (
    <Header>
      <ButtonLink to="/">
        <Text theme='label'>Sistema de Inventario</Text>
      </ButtonLink>
      <MenuButton type="button" onClick={handleOpenMenu}>
        {openMenu ? (
          <span style={{ display: "flex" }}>
            <FiX color="#384955" size="24" />
          </span>
        ) : (
          <span style={{ display: "flex" }}>
            <FiMenu color="#384955" size="24" />
          </span>
        )}
      </MenuButton>
      {openMenu && (
        <MobileMenu>
          <MobileMenuList>
            <ListItem>
              <Button>
                <ButtonLink to="signup">Crear cuenta</ButtonLink>
              </Button>
            </ListItem>
            <ListItem>
              <Button>
                <ButtonLink to="signin">Iniciar sesión</ButtonLink>
              </Button>
            </ListItem>
          </MobileMenuList>
        </MobileMenu>
      )}
    </Header>
  );
};

export default Navbar;
