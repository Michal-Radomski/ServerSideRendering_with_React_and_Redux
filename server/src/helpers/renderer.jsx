import React from "react";
import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {renderRoutes} from "react-router-config";
import serialize from "serialize-javascript";

import Routes from "../client/Routes";

export default (req, store) => {
  // const content = renderToString(<Home />);
  const context = {};
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {/* //* or: <StaticRouter context={{}}> */}
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  // console.log("content:", content);

  return `
<html>
<head></head>
<body>
<div id="root">${content}</div>
<script>
window.INITIAL_STATE=${serialize(store.getState())}
</script>
<script src="bundle.js"></script>
</body>
</html>
`;
};

//* previous version before serialize:
//* window.INITIAL_STATE=${JSON.stringify(store.getState())}