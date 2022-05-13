import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function EditModal(props) {
	const { onClose, onConfirm, data } = props;
	const { name, macAddress, powerConsumption, ip } = data;
	const [newName, setNewName] = useState(name);
	const [newMacAddress, setNewMacAddress] = useState(macAddress);
	const [newPowerConsumption, setNewPowerConsumption] =
		useState(powerConsumption);
	const [newIp, setNewIp] = useState(ip);

	const handleChangeName = (e) => {
		setNewName(e.target.value);
	};
	const handleChangeMACAddress = (e) => {
		setNewMacAddress(e.target.value);
	};
	const handleChangeIp = (e) => {
		setNewIp(e.target.value);
	};
	const handleChangePowerConsumption = (e) => {
		setNewPowerConsumption(Number(e.target.value));
	};
	return (
		<div className="editModal">
			<div className="editModal__inner">
				<div className="editModal__header">
					<p>Sửa thông tin dịch vụ</p>
					<FontAwesomeIcon icon={faTimes} className="i" onClick={onClose} />
				</div>
				<div className="editModal__body">
					<form action="#" className="form-container">
						<div className="form-group">
							<input
								className="form-control editDevice__form--input"
								type="text"
								placeholder="name"
								value={newName}
								onChange={(e) => handleChangeName(e)}
							/>
						</div>
						<div className="form-group">
							<input
								className="form-control editDevice__form--input"
								placeholder="MAC Address"
								value={newMacAddress}
								onChange={(e) => handleChangeMACAddress(e)}
							/>
						</div>
						<div className="form-group">
							<input
								className="form-control editDevice__form--input"
								placeholder="IP"
								value={newIp}
								onChange={(e) => handleChangeIp(e)}
							/>
						</div>
						<div className="form-group">
							<input
								className="form-control editDevice__form--input"
								placeholder="Power Consumption (Kw/H)"
								value={newPowerConsumption}
								onChange={(e) => handleChangePowerConsumption(e)}
							/>
						</div>
					</form>
				</div>
				<div className="editModal__footer">
					<button
						className="editModal__footer--save"
						onClick={() =>
							onConfirm({
								...data,
								name: newName,
								macAddress: newMacAddress,
								powerConsumption: newPowerConsumption,
								ip: newIp,
							})
						}
					>
						Lưu thay đổi
					</button>
					<button className="editModal__footer--exit" onClick={onClose}>
						Đóng
					</button>
				</div>
			</div>
		</div>
	);
}
