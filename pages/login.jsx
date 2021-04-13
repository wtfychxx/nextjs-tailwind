import React from "react";
import Layout from "../components/layout/Layout";
import LoginForm from "../components/forms/loginForm";

export default function home() {
  return (
    <Layout title="login" className="bg-gray-200">
      <LoginForm />
    </Layout>
  );
}
