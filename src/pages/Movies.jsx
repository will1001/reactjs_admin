import React, { useEffect } from "react";
import styled from "styled-components";
import Table from "../components/Table";
import { getMovies } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
`;

const headTable = [
  { paramName: "title", headTitle: "Title" },
  { paramName: "description", headTitle: "Description" },
  { paramName: "year", headTitle: "Year" },
  { paramName: "genre", headTitle: "Genre" },
  { paramName: "limit", headTitle: "Limit" },
  { paramName: "image", headTitle: "Image" },
  { paramName: "isSeries", headTitle: "Is Series" },
  { paramName: "title_image", headTitle: "Title Image" },
  { paramName: "thumbnail_image", headTitle: "Thumbnail Image" },
  { paramName: "trailer", headTitle: "Trailer" },
  { paramName: "video", headTitle: "Video" },
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
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  return (
    <Container>
      <h1>Movies</h1>
      <Table
        headTable={headTable}
        bodyTable={movies}
        formInput={formInput}
        tableDataName="movies"
      />
    </Container>
  );
}

export default Movies;
