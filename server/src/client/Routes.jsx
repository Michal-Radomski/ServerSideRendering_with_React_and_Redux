// import React from "react";
// import {Route} from "react-router-dom";

import Home from "./components/Home";
import UsersList from "./components/UsersList";

//* Traditional - not working on SSR
// export default () => {
//   return (
//     <div>
//       <Route path="/" exact={true} component={Home} />
//       {/* <Route path="/hi" component={()=> "Hi"} /> */}
//       <Route path="/users" component={UsersList} />
//     </div>
//   );
// };

//* SSR Routing with React Router Config Library
export default [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/users",
    component: UsersList,
  },
];
