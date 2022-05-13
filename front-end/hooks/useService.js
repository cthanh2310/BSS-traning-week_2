import { useCallback, useEffect, useState } from 'react';

export const useService = () => {
	const [services, setServices] = useState([]);
	const reFetchServices = useCallback(async () => {
		const response = await fetch('http://localhost:5500/dashboard')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				return data;
			});
		setServices(response.data);
	}, []);
	useEffect(() => {
		reFetchServices();
	}, [reFetchServices]);
	return { services, reFetchServices };
};
