import React from "react";
import Layout from "./src/components/Layout";
import "./src/index.scss";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
