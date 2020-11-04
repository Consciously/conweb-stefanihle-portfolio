import React from "react";
import Layout from "./src/components/Layout";
import "./src/index.scss";

const HeadComponent = [
	<link
		href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap'
		rel='stylesheet'
	/>
];

export function onRenderBody({ setHeadComponents }) {
	setHeadComponents(HeadComponent);
}

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
