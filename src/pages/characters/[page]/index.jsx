import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { prefetchRickAndMorty } from "../../../ions/endpoints";
import Template from "../../../templates/characters";

const Page = () => {
	const { query } = useRouter();
	const { data, error } = useQuery(["/character", query]);
	return <Template data={data} error={error} />;
};

export default Page;

export const getServerSideProps = async ({ query }) => ({
	props: {
		...(await prefetchRickAndMorty("/character", query)),
	},
});
