import React, { useMemo } from "react";

import Head from "next/head";
import DefaultNavbar from "../navbar/defaultNavbar";

export default function Layout(props) {
  return (
    <div className={`min-h-screen ${props.className && props.className}`}>
      <Head>
        <title>{props.title}</title>
      </Head>

      <DefaultNavbar />

      <div className="mt-8">{props.children}</div>
    </div>
  );
}
