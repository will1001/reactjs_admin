import React from "react";
import styled from "styled-components";
import StatisticCard from "../components/StatisticCard";
import Topbar from "../components/Topbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

const Container = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  padding: 0 20px;
  > div {
    margin-right: 20px;
  }
`;

function DashBoard() {
  return (
    <Container>
      <Topbar />
      <Row>
        <StatisticCard
          Icon={AccountCircleIcon}
          title={"Users"}
          data={497}
          color1={"rgba(14, 155, 211, 1)"}
          color2={"rgba(37, 193, 218, 1)"}
        />
        <StatisticCard
          Icon={OndemandVideoIcon}
          title={"Movies"}
          data={200}
          color1={"rgba(54,187,113,1)"}
          color2={"rgba(32,230,177,1)"}
        />
      </Row>
    </Container>
  );
}

export default DashBoard;
