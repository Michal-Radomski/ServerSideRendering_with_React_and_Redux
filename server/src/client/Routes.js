// import React from "react";
// import {Route} from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
// import UsersListPage, {loadData} from "./pages/UsersList";
import UsersListPage from "./pages/UsersListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";

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
    ...App, //* Always is displayed
    routes: [
      {
        path: "/",
        // component: HomePage,
        ...HomePage,
        exact: true,
      },
      {
        path: "/admins",
        ...AdminsListPage,
      },
      {
        // loadData: loadData,
        // path: "/users",
        // component: UsersListPage,
        ...UsersListPage,
        path: "/users",
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
