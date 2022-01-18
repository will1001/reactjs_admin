import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 1px 0px 1px #888888;
  background-color: #cccccc;
  width: 100%;
`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PotoProfileIcon = styled.div`
  cursor: pointer;
  margin: 10px;
`;

const PotoProfileMenu = styled.div`
  position: absolute;
  right: 10px;
  top: 35px;
  background-color: white;
  box-shadow: -1px 0px 10px #888888;
  text-align: center;
`;

const PotoProfileButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #b4afaf;
  color: #7c7575;
  padding: 20px 20px;
  width: 80px;
  cursor: pointer;
  &:hover {
    background-color: #2c323f;
    color: white;
  }
`;

function Topbar() {
  const [openProfilMenu, setOpenProfilMenu] = useState(false);
  return (
    <Container>
      <Right>
        <PotoProfileIcon onClick={() => setOpenProfilMenu(!openProfilMenu)}>
          <AccountCircleIcon style={{ fontSize: 30 }} />
        </PotoProfileIcon>
        {openProfilMenu && (
          <PotoProfileMenu>
            <PotoProfileButton>
              <LogoutIcon style={{ fontSize: 20 }} /> Logout
            </PotoProfileButton>
          </PotoProfileMenu>
        )}
      </Right>
    </Container>
  );
}

export default Topbar;
