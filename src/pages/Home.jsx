import React from "react";
import styled from "styled-components";
import Form from "../components/Form";
import { useSelector } from "react-redux";

import Sidebar from "../components/Sidebar";
import Users from "./Users";
import Dashboard from "./DashBoard";
import Movies from "./Movies";
import Lists from "./Lists";

const Container = styled.div`
  display: flex;
`;
function Home() {
  const { menuSelected } = useSelector((state) => state.theme);

  const ContentMenus = () => {
    switch (menuSelected) {
      case "dashboard":
        return <Dashboard />;
      case "form":
        return <Form />;
      case "users":
        return <Users />;
      case "movies":
        return <Movies />;
      case "lists":
        return <Lists />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <Container>
      <Sidebar />
      <ContentMenus />
    </Container>
  );
}

export default Home;
