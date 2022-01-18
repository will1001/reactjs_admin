import React from "react";
import styled from "styled-components";
import { listMenu } from "./SidebarMenuList";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 200px;
  height: 150vh;
  background-color: #2c323f;
  /* position: absolute; */
  /* left: 0; */
  /* top: 0; */
`;

const PartMenu = styled.div`
  padding: 10px;
  color: #b0bec5;
`;

const MenuButton = styled.div`
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: ${(props) => props.isActive && "0px 30px 30px 0px"};
  margin-right: 10px;
  background-color: ${(props) => props.isActive && "white"};
  color: ${(props) => (props.isActive ? "#2c323f " : "white")};
`;

const MenuButtonText = styled.span`
  margin-left: 10px;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.h1`
  margin-right: 10px;
  font-size: 40px;
  color: white;
`;

const LogoText = styled.span`
  font-size: 20px;
  color: white;
`;

function Sidebar() {
  const location = useLocation();

  return (
    <Container>
      <LogoContainer>
        <Logo>W</Logo>
        <LogoText>Admin</LogoText>
      </LogoContainer>
      {listMenu.map((menu, i) => {
        return (
          <div key={i}>
            <PartMenu>{menu.title}</PartMenu>
            {menu.subMenu.map((data, j) => {
              return (
                <Link
                  key={j}
                  style={{ textDecoration: "none" }}
                  to={`/${data.link}`}
                >
                  <MenuButton
                    isActive={location.pathname.split("/")[1] === data.link}
                  >
                    {data.icon}
                    <MenuButtonText>{data.title}</MenuButtonText>
                  </MenuButton>
                </Link>
              );
            })}
          </div>
        );
      })}
    </Container>
  );
}

export default Sidebar;
