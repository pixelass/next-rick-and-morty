import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">Rick and Morty</title>
				<meta
					key="description"
					name="description"
					content="Playing with the Rick and Morty API"
				/>
			</Head>
			<h1>Rick and Morty</h1>
		</Layout>
	);
};

export default Page;
