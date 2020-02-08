import React from "react";
import Head from '../components/head';
import Nav from '../components/nav';

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Head title="Blog"/>
        <Nav />
        <h1> Blog page </h1>{" "}
      </div>
    );
  }
}

export default Blog;
