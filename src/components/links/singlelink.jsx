import React, { Component } from "react";

class SingleLink extends Component {

  render() {
    const { singleLink } = this.props;
    return (
      <div>
        <h3>{singleLink.title}</h3>
        <a href={singleLink.url} target="_blank">
          <p>Go to Site</p>
        </a>
      </div>
    );
  }
}

export default SingleLink;
