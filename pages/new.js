import { ProductForm } from "../components/ProductForm";

import React from "react";
import { Layout } from "../components/Layout";

function homePage() {
  return (
    <Layout>
      <div className="grid place-items-center h-5/6">
        <ProductForm />
      </div>
    </Layout>
  );
}

export default homePage;
