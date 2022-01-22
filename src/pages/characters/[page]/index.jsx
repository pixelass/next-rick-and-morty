import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Layout from "../../../organisms/layout";

const getCharacters = page => async () => {
	try {
		const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
		return data;
	} catch (error) {
		return error;
	}
};

const Page = () => {
	const { query } = useRouter();
	const page = Number.parseInt(query.page, 10);
	const { data, error } = useQuery("characters", getCharacters(page));
	return (
		<Layout>
			<Head>
				<title key="title">Characters</title>
				<meta key="description" name="description" content="Rick and Morty Characters" />
			</Head>
			<h1>Characters</h1>
			{error && <div>{error.message}</div>}
			<ul>
				{data?.results.map(({ id, name }) => {
					return (
						<li key={id}>
							<Link href={`/character/${id}`}>{name}</Link>
						</li>
					);
				})}
			</ul>
			{page > 1 && <Link href={`/characters/${page - 1}`}>Previous Page</Link>} {page} of{" "}
			{data?.info.pages}{" "}
			{data && page < data?.info.pages && (
				<Link href={`/characters/${page + 1}`}>Next Page</Link>
			)}
		</Layout>
	);
};

export default Page;

export const getServerSideProps = async request => {
	const {
		query: { page },
	} = request;
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery("characters", getCharacters(page));

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};
