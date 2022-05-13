export const getTotalPowerConsumption = (services) => {
	let total = 0;
	services.forEach((service) => {
		total += Number(service.powerConsumption);
	});
	return total;
};
