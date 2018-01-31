import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import LinkList from "./linklist";
import SingleLink from "./singlelink";
import NewLink from "./NewLink";

const Links = ({ links, getSingleLink, addLink }) => {
  const renderLinkList = () => {
    return <LinkList links={links} />;
  };

  const renderSingleLink = props => {
    const { id } = props.match.params;
    // links [ { id }, { id }]
    const singleLink = links.find(link => link.id === id);

    if (!singleLink) {
      return <div> meme not found </div>;
    }

    return <SingleLink singleLink={singleLink} id={id} />;
  };

  const renderNewLink = () => {
    return <NewLink addLink={addLink} />;
  };
  // "links/new"
  //
  return (
    <Switch>
      <Route exact path="/links" render={renderLinkList} />
      <Route exact path="/links/new" render={renderNewLink} />
      <Route path="/links/:id" render={renderSingleLink} />
    </Switch>
  );
};

export default Links;
