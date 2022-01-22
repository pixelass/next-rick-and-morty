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
	const {
		query: { id },
	} = useRouter();
	const { data, error } = useQuery("character", getCharacter(id));
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

	await queryClient.prefetchQuery("character", getCharacter(id));

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};
