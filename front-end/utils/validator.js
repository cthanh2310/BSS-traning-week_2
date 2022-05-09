export const validate = (values) => {
	const { name, macAddress, ip, powerConsumption } = values;
	const regexNumber = /^\d+$/;
	const errors = {};

	if (name.length === 0) {
		errors.name = 'Vui lòng nhâp trường này!';
	}
	if (macAddress.length === 0) {
		errors.macAddress = 'Vui lòng nhâp trường này!';
	}
	if (ip.length === 0) {
		errors.ip = 'Vui lòng nhâp trường này!';
	}
	if (powerConsumption.length === 0) {
		errors.powerConsumption = 'Vui lòng nhâp trường này!';
	} else {
		if (!!!powerConsumption.match(regexNumber)) {
			errors.powerConsumption = 'Trường này yêu cầu nhập số!';
		}
	}
	return errors;
};
