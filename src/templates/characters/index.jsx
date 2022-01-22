import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../organisms/layout";

const Template = ({ data }) => {
	const { query } = useRouter();
	const page = Number.parseInt(query.page, 10);
	return (
		<Layout>
			<Head>
				<title key="title">Characters</title>
				<meta key="description" name="description" content="Rick and Morty Characters" />
			</Head>
			<h1>Characters</h1>
			<ul>
				{data.results.map(({ id, name }) => {
					return (
						<li key={id}>
							<Link href={`/character/${id}`}>{name}</Link>
						</li>
					);
				})}
			</ul>
			{page > 1 && <Link href={`/characters/${page - 1}`}>Previous Page</Link>} {page} of{" "}
			{data.info.pages}{" "}
			{data && page < data.info.pages && (
				<Link href={`/characters/${page + 1}`}>Next Page</Link>
			)}
		</Layout>
	);
};

export default Template;
