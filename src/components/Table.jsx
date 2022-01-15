import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "./Button";
import { changeMenu } from "../redux/ThemeRedux";
import { setData, setForm } from "../redux/FormRedux";
import { useDispatch } from "react-redux";

const TableContainer = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const Tr = styled.tr`
  :nth-child(even) {
    background-color: #dddddd;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DeleteIconButton = styled.div`
  display: inline-block;
  cursor: pointer;
  transition-duration: 300ms;
  :hover {
    transform: scale(1.3);
    color: #001e3c;
  }
`;

function Table({ head, body, formInput }) {
  const dispatch = useDispatch();

  const changeViewForm = (historyData) => {
    dispatch(setData(historyData));
    dispatch(setForm(formInput));
    dispatch(changeMenu("form"));
  };

  return (
    <>
      <Button
        onClick={() => changeViewForm({})}
        setting={{
          width: "100px",
          padding: "10px",
          fontSize: "17px",
        }}
      >
        Add Data
      </Button>
      <TableContainer>
        <thead>
          <Tr>
            {head.map((e, i) => (
              <Th key={i}>{e}</Th>
            ))}
            <Th></Th>
          </Tr>
        </thead>
        <tbody>
          {body.map((e, i) => (
            <Tr key={i}>
              {Object.keys(e).map(
                (propertyName, j) =>
                  j !== 0 && <Td key={j}>{e[propertyName]}</Td>
              )}
              <Td>
                <CTAContainer>
                  <Button
                    onClick={() => changeViewForm(e)}
                    setting={{
                      width: "50px",
                      padding: "5px",
                      fontSize: "10px",
                    }}
                  >
                    Edit
                  </Button>
                  <DeleteIconButton>
                    <DeleteIcon />
                  </DeleteIconButton>
                </CTAContainer>
              </Td>
            </Tr>
          ))}
        </tbody>
      </TableContainer>
    </>
  );
}

export default Table;
