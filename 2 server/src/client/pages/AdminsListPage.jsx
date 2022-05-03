import React from "react";
import {connect} from "react-redux";

import {fetchAdmins} from "../actions/index";
import requireAuth from "../components/HOCs/requireAuth.jsx";

class AdminsListPage extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.fetchAdmins.map((admin) => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h3>Protected list of Admins:</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

function mapStateToProps({admins}) {
  return {admins: admins};
}

export default {
  component: connect(mapStateToProps, {fetchAdmins})(requireAuth(AdminsListPage)),
  loadData: ({dispatch}) => dispatch(fetchAdmins()),
};
