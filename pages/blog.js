import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import Head from "../components/head";
import BasePage from "../components/BasePage";

class Blog extends React.Component {
  render() {
    return (
      <BaseLayout>
        <Head title="Blog" />
        <BasePage>
          <h1> Blog page </h1>{" "}
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Blog;
