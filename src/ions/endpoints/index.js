import axios from "axios";
import { dehydrate, QueryClient } from "react-query";

export const rickAndMorty = async ({ queryKey: [path, params = null] }) => {
	try {
		const { data } = await axios.get(`https://rickandmortyapi.com/api${path}`, { params });
		return data;
	} catch (error) {
		return error;
	}
};

export const createRickAndMortyClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				queryFn: rickAndMorty,
				staleTime: 1_000_000,
				cacheTime: 1_000_000,
			},
		},
	});

export const prefetchRickAndMorty = async (path, params = null) => {
	const queryClient = createRickAndMortyClient();

	await queryClient.prefetchQuery([path, params]);

	return {
		dehydratedState: dehydrate(queryClient),
	};
};
