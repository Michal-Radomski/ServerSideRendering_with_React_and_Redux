import React from "react";

const Home = (props: {name: string}) => {
  return (
    <React.Fragment>
      <h1>Hello {props.name}!</h1>
    </React.Fragment>
  );
};

export default Home;
