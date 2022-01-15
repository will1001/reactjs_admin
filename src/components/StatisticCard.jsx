import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 100px;
  margin-top: 20px;
  background: linear-gradient(
    90deg,
    ${(props) => props.color1} 0%,
    ${(props) => props.color2} 100%
  );
`;

const Left = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: White;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  color: white;
  div:nth-child(1) {
    font-weight: bold;
    font-size: 20px;
  }
`;

function StatisticCard({ Icon, title, data, color1, color2 }) {
  return (
    <Container color1={color1} color2={color2}>
      <Left>
        <Icon style={{ fontSize: 30 }} />
      </Left>
      <Right>
        <div>{data}</div>
        <div>{title}</div>
      </Right>
    </Container>
  );
}

export default StatisticCard;
