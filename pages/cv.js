import React from "react";
import Head from "../components/head";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

const cv = () => {
  return (
    <BaseLayout>
      <Head title="CV" />
      <BasePage>
        <div>CV Page</div>
      </BasePage>
    </BaseLayout>
  );
};

export default cv;
