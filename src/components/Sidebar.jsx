import React from "react";
import styled from "styled-components";
import { changeMenu } from "../redux/ThemeRedux";
import { useDispatch, useSelector } from "react-redux";
import { listMenu } from "./SidebarMenuList";

const Container = styled.div`
  width: 200px;
  height: 150vh;
  background-color: #2c323f;
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
  const dispatch = useDispatch();
  const { menuSelected } = useSelector((state) => state.theme);

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
                <MenuButton
                  key={j}
                  onClick={() => dispatch(changeMenu(data.link))}
                  isActive={menuSelected === data.link}
                >
                  {data.icon}
                  <MenuButtonText>{data.title}</MenuButtonText>
                </MenuButton>
              );
            })}
          </div>
        );
      })}
    </Container>
  );
}

export default Sidebar;
