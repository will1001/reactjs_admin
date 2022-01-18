import React, { useEffect } from "react";
import styled from "styled-components";
import Table from "../components/Table";
import { getUsers } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
`;

const headTable = [
  { paramName: "username", headTitle: "Username" },
  { paramName: "email", headTitle: "Email" },
  { paramName: "password", headTitle: "Password" },
  { paramName: "profilePic", headTitle: "ProfilePic" },
  { paramName: "isAdmin", headTitle: "Is Admin" },
];

const formInput = [
  {
    text: "Username",
    type: "text",
    name: "username",
    options: null,
  },
  {
    text: "Email",
    type: "text",
    name: "email",
    options: null,
  },
  {
    text: "Password",
    type: "password",
    name: "password",
    options: null,
  },
  {
    text: "profilePic",
    type: "text",
    name: "profilePic",
    options: null,
  },
  {
    text: "is Admin",
    type: "select",
    name: "isAdmin",
    options: [
      { title: "No", value: false },
      { title: "Yes", value: true },
    ],
  },
];

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);
  return (
    <Container>
      <h1>Users</h1>
      <Table
        headTable={headTable}
        bodyTable={users}
        formInput={formInput}
        tableDataName={"users"}
      />
    </Container>
  );
}

export default Users;
