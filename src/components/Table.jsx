import React from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "./Button";
import { Link } from "react-router-dom";
import { deleteMovie, deleteUser, deleteList } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import storage from "../firebaseconfig";
import { ref, deleteObject } from "firebase/storage";

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

function Table({ headTable, bodyTable, formInput, tableDataName }) {
  const regexDetectURL = new RegExp(`http|www|https`, "g");
  const dispatch = useDispatch();

  const deleteFileFirebase = (data) => {
    const inputFileType = formInput.filter(
      (e) => e.type === "Image" || e.type === "Video"
    );
    inputFileType.forEach((file) => {
      const filename = data[file.name].split("?")[0].split("/").at(-1);
      const desertRef = ref(storage, filename);
      // Delete the file
      deleteObject(desertRef)
        .then(() => {
          console.log("file deleted");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const deleteData = (data) => {
    if (window.confirm("Are you sure ?")) {
      deleteFileFirebase(data);
      switch (tableDataName) {
        case "movies":
          deleteMovie(data._id, dispatch);
          break;

        case "users":
          deleteUser(data._id, dispatch);
          break;

        case "lists":
          deleteList(data._id, dispatch);
          break;

        default:
          return;
      }
    }
  };
  return (
    <>
      <Link
        style={{ textDecoration: "none" }}
        to={"/form"}
        state={{
          formInput: formInput,
          formType: "create",
          historyData: {},
          tableDataName: tableDataName,
        }}
      >
        <Button
          setting={{
            width: "100px",
            padding: "10px",
            fontSize: "17px",
          }}
        >
          Add Data
        </Button>
      </Link>
      <TableContainer>
        <thead>
          <Tr>
            {headTable.map((e, i) => (
              <Th key={i}>{e.headTitle}</Th>
            ))}
            <Th></Th>
          </Tr>
        </thead>
        <tbody>
          {bodyTable.map((e, i) => (
            <Tr key={i}>
              {headTable.map((data, j) => {
                if (typeof e[data.paramName] === "boolean") {
                  return <Td key={j}>{e[data.paramName] ? "Yes" : "No"}</Td>;
                } else if (typeof e[data.paramName] === "undefined") {
                  return <></>;
                } else if (e[data.paramName].toString().match(regexDetectURL)) {
                  return (
                    <Td key={j}>
                      <a href={e[data.paramName]}>see file</a>
                    </Td>
                  );
                } else if (Array.isArray(e[data.paramName])) {
                  return <Td key={j}>array</Td>;
                } else {
                  return (
                    <Td key={j}>
                      {e[data.paramName].toString().length > 40
                        ? e[data.paramName].substring(0, 40) + ". . ."
                        : e[data.paramName]}
                    </Td>
                  );
                }
              })}
              <Td>
                <CTAContainer>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/form"}
                    state={{
                      formInput: formInput,
                      formType: "update",
                      historyData: e,
                      tableDataName: tableDataName,
                    }}
                  >
                    <Button
                      setting={{
                        width: "50px",
                        padding: "5px",
                        fontSize: "10px",
                      }}
                    >
                      Edit
                    </Button>
                  </Link>

                  <DeleteIconButton onClick={() => deleteData(e)}>
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
