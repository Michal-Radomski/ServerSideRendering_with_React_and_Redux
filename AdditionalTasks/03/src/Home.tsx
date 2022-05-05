import React from "react";

const Home = (props: {name: string}): JSX.Element => {
  return (
    <React.Fragment>
      <h1>
        Hello <span>{props.name}!</span>
      </h1>
    </React.Fragment>
  );
};

export default Home;
