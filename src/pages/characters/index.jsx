const Page = () => {
	return null;
};

export default Page;

export const getServerSideProps = async () => {
	return {
		redirect: {
			destination: "/characters/1",
			permanent: false,
		},
	};
};
