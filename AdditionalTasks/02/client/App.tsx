import React from "react";

const App: React.FC = () => {
  const [clientMessage, setClientMessage] = React.useState<string>("");

  React.useEffect(() => {
    setTimeout(() => {
      setClientMessage("Hello From React");
    }, 1000);
  });

  return (
    <React.Fragment>
      <h1 style={{backgroundColor: "cyan"}}>Hello World!</h1>
      <h2 style={{color: "darkmagenta"}}>{clientMessage}</h2>
    </React.Fragment>
  );
};

export default App;