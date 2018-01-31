import React, { Component } from "react";
import { connect } from "react-redux";
import Links from "../components/links/links";

class LinksContainer extends React.Component {
  render() {
    const { links } = this.props;

    return <Links links={links} />;
  }
}

export default connect(state => state)(LinksContainer);
