import React from "react";

const App: React.FC = () => {
  const [clientMessage, setClientMessage] = React.useState<string>("");

  React.useEffect(() => {
    setClientMessage("Hello From React");
  });

  return (
    <React.Fragment>
      <h1 style={{backgroundColor: "cyan"}}>Hello World!</h1>
      <h2>{clientMessage}</h2>
    </React.Fragment>
  );
};

export default App;
