const fetchData = async () => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: 'cdb42d02',
			s: 'avengers',
		},
    });
    console.log(response.data);
};
fetchData();