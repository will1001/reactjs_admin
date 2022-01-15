import React from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Table from "../components/Table";

const Container = styled.div`
  width: 100%;
`;

const head = [
  "Title",
  "Description",
  "Year",
  "Genre",
  "Duration",
  "Limit",
  "Image",
  "Is Series",
  "Title Image",
  "Thumbnail Image",
  "Trailer",
  "Video",
];

const body = [
  {
    id: "1",
    title: "title",
    description: "description",
    year: 2012,
    genre: "genre",
    duration: "duration",
    limit: 1234,
    image: "image",
    isSeries: "isSeries",
    title_image: "title_image",
    thumbnail_image: "thumbnail_image",
    trailer: "trailer",
    video: "video",
  },
  {
    id: "2",
    title: "title",
    description: "description",
    year: 2021,
    genre: "genre",
    duration: "duration",
    limit: 6767676,
    image: "image",
    isSeries: "isSeries",
    title_image: "title_image",
    thumbnail_image: "thumbnail_image",
    trailer: "trailer",
    video: "video",
  },
];

const formInput = [
  {
    text: "Title",
    type: "text",
    name: "title",
    options: null,
  },
  {
    text: "Description",
    type: "text",
    name: "description",
    options: null,
  },
  {
    text: "Year",
    type: "number",
    name: "year",
    options: null,
  },
  {
    text: "Genre",
    type: "text",
    name: "genre",
    options: null,
  },
  {
    text: "Duration",
    type: "text",
    name: "duration",
    options: null,
  },
  {
    text: "Limit",
    type: "number",
    name: "limit",
    options: null,
  },
  {
    text: "Is Series ?",
    type: "select",
    name: "isSeries",
    options: [
      { title: "No", value: false },
      { title: "Yes", value: true },
    ],
  },
  {
    text: "Image",
    type: "Image",
    name: "image",
    options: null,
  },
  {
    text: "Title Image",
    type: "Image",
    name: "title_image",
    options: null,
  },
  {
    text: "Thumbnail Image",
    type: "Image",
    name: "thumbnail_image",
    options: null,
  },
  {
    text: "Trailer",
    type: "Video",
    name: "trailer",
    options: null,
  },
  {
    text: "Video",
    type: "Video",
    name: "video",
    options: null,
  },
];

function Movies() {
  return (
    <Container>
      <Topbar />
      <h1>Movies</h1>
      <Table head={head} body={body} formInput={formInput} />
    </Container>
  );
}

export default Movies;
