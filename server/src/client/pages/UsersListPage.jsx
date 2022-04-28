import React from "react";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";

import {fetchUsers} from "../actions/index";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Users App</title>
          <meta property="og:title" content="Users App" />
        </Helmet>
        Here's a list of Users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {users: state.users};
}

function loadData(store) {
  // console.log("I'm trying to load some data");
  return store.dispatch(fetchUsers());
}
// export {loadData};

export default {
  loadData: loadData,
  component: connect(mapStateToProps, {fetchUsers})(UsersList),
};
