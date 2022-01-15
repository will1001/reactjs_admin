import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  width: ${(props) => props.size.width};
  padding: ${(props) => props.size.padding};
  font-size: ${(props) => props.size.fontSize};
  background-color: #2c323f;
  color: white;
  margin: 10px;
  border-radius: 7px;
  text-align: center;
  border: 1px solid transparent;
  transition-duration: 300ms;
  :hover {
    background-color: white;
    border-color: #2c323f;
    color: #2c323f;
  }
`;

function Button({ children, setting, onClick }) {
  return (
    <Container onClick={onClick} size={setting}>
      {children}
    </Container>
  );
}

export default Button;
