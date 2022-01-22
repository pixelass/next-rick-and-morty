import Head from "next/head";
import React from "react";
import Layout from "../../organisms/layout";

const Template = ({ data }) => {
	return (
		<Layout>
			<Head>
				<title key="title">{data.name}</title>
				<meta
					key="description"
					name="description"
					content={`Some information about ${data.name}`}
				/>
			</Head>
			<h1>{data.name}</h1>
			<h2>{data.species}</h2>
		</Layout>
	);
};

export default Template;
