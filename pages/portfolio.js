import React from "react";
import { withRouter } from "next/router";
import BaseLayout from "../components/layouts/BaseLayout";
import Head from "../components/head";
import BasePage from "../components/BasePage";
import axios from "axios";

class Portfolio extends React.Component {
  static async getInitialProps({ query }) {
    const postID = query.id;
    let postData = {};
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postID}`
      );
      postData = response.data;
    } catch (error) {
      console.log(error);
    }
    return { postData };
  }

  render() {
    const { postData } = this.props;
    return (
      <BaseLayout>
        <Head title="Portfolio" />
        <BasePage>
          <div>Portfolios</div>
          <h4>Title: {postData.title}</h4>
          <p>Body: {postData.body}</p>
          <p>ID: {postData.id}</p>
        </BasePage>
      </BaseLayout>
    );
  }
}
export default withRouter(Portfolio);
