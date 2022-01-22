import { Global } from "@emotion/react";
import React from "react";
import { Hydrate, QueryClientProvider } from "react-query";
import { createRickAndMortyClient } from "../ions/endpoints";
import { globalStyle } from "../ions/styles";

const App = ({ Component, pageProps }) => {
	const [queryClient] = React.useState(createRickAndMortyClient);
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<Global styles={globalStyle} />
				<Component {...pageProps} />
			</Hydrate>
		</QueryClientProvider>
	);
};

export default App;
