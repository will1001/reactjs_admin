import React from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Table from "../components/Table";

const Container = styled.div`
  width: 100%;
`;

const head = ["Username", "Email", "Password", "profilePic", "isAdmin"];

const body = [
  {
    id: "1",
    username: "Username",
    email: "Email@gmail.com",
    password: "Password",
    profilePic: "Address",
    isAdmin: "Male",
  },
  {
    id: "1",
    username: "Username",
    email: "Email@gmail.com",
    password: "Password",
    profilePic: "Address",
    isAdmin: "Male",
  },
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
  return (
    <Container>
      <Topbar />
      <h1>Users</h1>
      <Table head={head} body={body} formInput={formInput} />
    </Container>
  );
}

export default Users;
