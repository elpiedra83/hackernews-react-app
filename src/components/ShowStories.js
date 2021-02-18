import React from "react";
import Story from "./Story";
import useDataFetcher from "../hooks/dataFetcher";
import Loader from "./Loader";

const ShowStories = ({ type }) => {
  const { isLoading, stories } = useDataFetcher(type ? type : "top");

  return (
    <>
      <Loader show={isLoading}>Loading...</Loader>
      <section className="stories">
        {stories.map(({ data: story }) => (
          <Story key={story.id} story={story} />
        ))}
      </section>
    </>
  );
};

export default ShowStories;
