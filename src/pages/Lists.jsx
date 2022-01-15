import React from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import Table from "../components/Table";

const Container = styled.div`
  width: 100%;
`;
const head = ["Title", "Genre", "type"];

const body = [
  {
    id: "1",
    title: "title",
    genre: "genre",
    type: "movies",
    content: [
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
    ],
  },
  {
    id: "2",
    title: "title2",
    genre: "genre2",
    type: "series",
    content: [
      {
        id: "1",
        title: "title2",
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
      {
        id: "3",
        title: "title3",
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
    ],
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
    text: "Genre",
    type: "text",
    name: "genre",
    options: null,
  },

  {
    text: "Type",
    type: "select",
    name: "type",
    options: [
      { title: "Movie", value: "Movie" },
      { title: "Series", value: "Series" },
    ],
  },
  {
    text: "Content",
    type: "MultipleSelect",
    name: "content",
    options: body[1].content,
  },
];

function Lists() {
  return (
    <Container>
      <Topbar />
      <h1>Lists</h1>
      <Table head={head} body={body} formInput={formInput} />
    </Container>
  );
}

export default Lists;
