import React from "react";
import Layout from "../components/layout/Layout";

import { useStoreModal } from "../lib";

export default function Home() {
  return (
    <>
      <Layout title="nextjs Tailwindcss 2">
        <div className="container">Welcome to tailwindcss 2</div>
      </Layout>
    </>
  );
}
