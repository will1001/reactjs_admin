import React, { useEffect } from "react";
import styled from "styled-components";
import Table from "../components/Table";
import { getMovies, getLists } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
`;
const headTable = [
  { paramName: "title", headTitle: "Title" },
  { paramName: "genre", headTitle: "Genre" },
  { paramName: "type", headTitle: "type" },
  { paramName: "content", headTitle: "Content" },
];

function Lists() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const lists = useSelector((state) => state.lists.lists);
  const formInput = [
    {
      text: "Title",
      type: "text",
      name: "title",
      options: null,
    },
    {
      text: "Genre",
      type: "select",
      name: "genre",
      options: [
        { title: "Adventure", value: "adventure" },
        { title: "Comedy", value: "comedy" },
        { title: "Crime", value: "crime" },
        { title: "Fantasy", value: "fantasy" },
        { title: "Historical", value: "historical" },
        { title: "Horror", value: "horror" },
        { title: "Romance", value: "romance" },
        { title: "Sci-fi", value: "sci-fi" },
        { title: "Thriller", value: "thriller" },
        { title: "Western", value: "western" },
        { title: "Animation", value: "animation" },
        { title: "Drama", value: "drama" },
        { title: "Documentary", value: "documentary" },
      ],
    },

    {
      text: "Type",
      type: "select",
      name: "type",
      options: [
        { title: "Movie", value: "movie" },
        { title: "Series", value: "series" },
      ],
    },
    {
      text: "Content",
      type: "MultipleSelect",
      name: "content",
      options: movies,
    },
  ];
  useEffect(() => {
    getMovies(dispatch);
    getLists(dispatch);
  }, [dispatch]);
  return (
    <Container>
      <h1>Lists</h1>
      <Table
        headTable={headTable}
        bodyTable={lists}
        formInput={formInput}
        tableDataName={"lists"}
      />
    </Container>
  );
}

export default Lists;
