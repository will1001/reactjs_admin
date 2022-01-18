import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import { routes } from "./Routes";

const Container = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  width: 100%;
`;
function App() {
  return (
    <BrowserRouter basename="/">
      <Container>
        <Sidebar />
        <RightContainer>
          <Topbar />
          <Routes>
            {routes.map((e, i) => (
              <Route key={i} exact path={e.route} element={e.element} />
            ))}
          </Routes>
        </RightContainer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
