import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import LinkList from './linklist';
import SingleLink from './singlelink';

const Links = ({ links, getSingleLink }) => {
  const renderLinkList = () => {
    return (
      <LinkList links={links} />
    )
  }

  const renderSingleLink = (props) => {
    const { id } = props.match.params;
    // links [ { id }, { id }]
    const singleLink = links.find(link => link.id === id)

    return (
      <SingleLink singleLink={singleLink} id={id} />
    )
  }

  return (
    <div>
      <Route exact path='/links' render={renderLinkList} />
      <Route path='/links/:id' render={renderSingleLink} />
    </div>
  )
}

export default Links;
