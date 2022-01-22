import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import { prefetchRickAndMorty } from "../../../ions/endpoints";
import Template from "../../../templates/character";

const Page = () => {
	const {
		query: { id, ...query },
	} = useRouter();
	const { data, error } = useQuery([`/character/${id}`, query]);
	return <Template data={data} error={error} />;
};

export default Page;

export const getServerSideProps = async ({ query: { id, ...query } }) => ({
	props: {
		...(await prefetchRickAndMorty(`/character/${id}`, query)),
	},
});
