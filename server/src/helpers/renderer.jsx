import React from "react";
import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom";
import Routes from "../client/Routes";

export default (req) => {
  // const content = renderToString(<Home />);
  const context = {};
  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      {/* //* or: <StaticRouter context={{}}> */}
      <Routes />
    </StaticRouter>
  );
  // console.log("content:", content);
  return `
<html>
<head></head>
<body>
<div id="root">${content}</div>
<script src="bundle.js"></script>
</body>
</html>
`;
};
