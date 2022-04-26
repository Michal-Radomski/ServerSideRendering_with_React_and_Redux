// import React from "react";
// import {Route} from "react-router-dom";

import HomePage from "./pages/Home";
// import UsersListPage, {loadData} from "./pages/UsersList";
import UsersListPage from "./pages/UsersList";

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
    // component: HomePage,
    ...HomePage,
    exact: true,
  },
  {
    // loadData: loadData,
    // path: "/users",
    // component: UsersListPage,
    ...UsersListPage,
    path: "/users",
  },
];
