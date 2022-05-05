import React from "react";

const Home = (props: {name: string}): JSX.Element => {
  return (
    <React.Fragment>
      <h1>Hello {props.name}!</h1>
    </React.Fragment>
  );
};

export default Home;
