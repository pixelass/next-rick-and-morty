import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Layout from "../../../organisms/layout";

const getCharacter = id => async () => {
	try {
		const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
		return data;
	} catch (error) {
		return error;
	}
};

const Page = () => {
	const { query } = useRouter();
	const id = Number.parseInt(query.id, 10);
	const { data, error } = useQuery("characters", getCharacter(id));
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			{error && <div>{error.message}</div>}

			{data && (
				<>
					<h1>{data.name}</h1>
					<h2>{data.species}</h2>
				</>
			)}
		</Layout>
	);
};

export default Page;

export const getServerSideProps = async request => {
	const {
		query: { id },
	} = request;
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery("characters", getCharacter(id));

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};
