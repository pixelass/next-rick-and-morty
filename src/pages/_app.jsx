import { Global } from "@emotion/react";
import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { globalStyle } from "../ions/styles";

const App = ({ Component, pageProps }) => {
	const [queryClient] = React.useState(() => new QueryClient());
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
