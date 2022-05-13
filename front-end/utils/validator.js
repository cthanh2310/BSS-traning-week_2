export const validate = (values) => {
	const { name, macAddress, ip, powerConsumption } = values;
	const regexNumber = /^\d+$/;
	const errors = {};

	if (name.length === 0) {
		errors.name = 'this field is required !';
	}
	if (macAddress.length === 0) {
		errors.macAddress = 'this field is required !';
	}
	if (ip.length === 0) {
		errors.ip = 'this field is required !';
	}
	if (powerConsumption.length === 0) {
		errors.powerConsumption = 'this field is required !';
	} else {
		if (!!!powerConsumption.match(regexNumber)) {
			errors.powerConsumption =
				'this field requires input of a positive integer !';
		}
	}
	return errors;
};
