import { useCallback, useEffect, useRef, useState } from 'react';
import styles from '../styles/Dashboard.module.css';
import tableStyles from '../styles/Table.module.css';
import renderColor from '../utils/renderColor';
import DoughnutChart from '../components/DoughnutChart';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DeleteModal from '../components/DeleteModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faPencil } from '@fortawesome/free-solid-svg-icons';
import EditModal from '../components/EditModal';
import { validate } from '../utils/validator';
import { getCurrentTime } from '../utils/getCurrentTime';

export default function Dashboard() {
	const didMount = useRef(false);

	const [dataTable, setDataTable] = useState([
		{
			id: 1,
			name: 'TV',
			macAddress: '00:18:44:11:3A:B7',
			ip: '127.0.0.2',
			createdDate: '31-05-2021',
			powerConsumption: 50,
		},
		{
			id: 2,
			name: 'Washer',
			macAddress: '00:18:44:11:3A:B8',
			ip: '127.0.0.3',
			createdDate: '31-05-2021',
			powerConsumption: 60,
		},
		{
			id: 3,
			name: 'Refrigerator',
			macAddress: '00:18:44:11:3A:B9',
			ip: '127.0.0.4',
			createdDate: '31-05-2021',
			powerConsumption: 80,
		},
		{
			id: 4,
			name: 'Selling Fan',
			macAddress: '00:18:44:11:3A:B2',
			ip: '127.0.0.5',
			createdDate: '31-05-2021',
			powerConsumption: 100,
		},
	]);
	const [idDelete, setIdDelete] = useState(null);
	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
	const [isOpenEditModal, setIsOpenEditModal] = useState(false);
	const [dataEditTable, setDataEditTable] = useState(null);
	// Resolve valdate and handle add service
	const [values, setValues] = useState({
		name: '',
		macAddress: '',
		ip: '',
		powerConsumption: '',
	});
	const [errors, setErrors] = useState({});

	const handleChange = useCallback((event) => {
		event.persist();
		console.log('{ ...values, [event.target.name]: event.target.value }', {
			...values,
			[event.target.name]: event.target.value,
		});
		setValues({ ...values, [event.target.name]: event.target.value });
	}, []);
	const handleAddDevice = () => {
		const errors = validate(values);
		if (Object.keys(errors).length === 0) {
			setDataTable((prev) => {
				return [
					...prev,
					{ ...values, id: Date.now(), createdDate: getCurrentTime() },
				];
			});
		}
		return setErrors(validate(values));
	};
	// Resolve delete actions
	const handleCloseDeleteModal = () => {
		setIsOpenDeleteModal(false);
	};
	const handleConfirmDeleteModal = () => {
		const newDataTable = dataTable.filter(function (value) {
			return value.id !== idDelete;
		});
		setDataTable(newDataTable);
		handleCloseDeleteModal();
	};

	// Resolve edit actions
	const handleCloseEditModal = () => {
		setIsOpenEditModal(false);
	};
	const handleConfirmEditModal = useCallback((newDataRow) => {
		const newDataTable = dataTable.map((value) =>
			value.id === newDataRow.id ? { ...value, ...newDataRow } : value
		);
		setDataTable(newDataTable);
		handleCloseEditModal();
	}, []);

	const handleEditRow = (id) => {
		const dataDetail = dataTable.find((value) => value.id === id);
		setDataEditTable(dataDetail);
		setIsOpenEditModal(true);
	};

	const handleDeleteRow = (id) => {
		setIdDelete(id);
		setIsOpenDeleteModal(true);
	};

	return (
		<div className="container">
			<div className="dashboard">
				<div className="nav__top-mobile hide-on-tablet-pc">
					<label htmlFor="nav-mobile-input" className="nav__bars-btn">
						<i className="nav__top-mobile-icon fas fa-bars"></i>
					</label>
				</div>
				<input
					type="checkbox"
					hidden
					className="nav__input"
					name="nav-mobile-input"
				/>

				<label htmlFor="nav-mobile-input" className="nav__overlay"></label>
				<nav className="nav__mobile hide-on-tablet-pc">
					<ul className="nav__mobile-list">
						<li className="nav__mobile-item">
							<a
								href="./dashboard.html"
								className="nav__link nav__mobile-link"
								style={{ color: '#2582f0' }}
							>
								Dashboard
								<i
									className="fa-solid fa-network-wired"
									style={{ color: '#6b6868', marginLeft: '5px' }}
								></i>
							</a>
						</li>
						<li className="nav__mobile-item">
							<a href="./logs.html" className="nav__link nav__mobile-link">
								Logs
								<i
									className="fa-solid fa-clock-rotate-left"
									style={{ color: '#6b6868', marginLeft: '5px' }}
								></i>
							</a>
						</li>
						<li className="nav__mobile-item">
							<a href="./settings.html" className="nav__link nav__mobile-link">
								Setting
								<i
									className="fa-solid fa-gear"
									style={{ color: '#6b6868', marginLeft: '5px' }}
								></i>
							</a>
						</li>
						<label
							htmlFor="nav-mobile-input"
							className="nav__mobile-close--text"
						>
							Thoát
						</label>
					</ul>
				</nav>

				<Sidebar />
				<Header />
				{isOpenDeleteModal && (
					<DeleteModal
						onClose={handleCloseDeleteModal}
						onConfirm={handleConfirmDeleteModal}
					/>
				)}
				{isOpenEditModal && (
					<EditModal
						onClose={handleCloseEditModal}
						onConfirm={handleConfirmEditModal}
						data={dataEditTable}
					/>
				)}

				<div className="main">
					<div className="content">
						<div className={`${tableStyles.contentTable} hide-on-mobile`}>
							<table className={tableStyles.statisticTable}>
								<thead className={tableStyles.statisticThead}>
									<tr className={tableStyles.statisticTrModifier}>
										<td className={tableStyles.statisticTd}>Devices</td>
										<td className={tableStyles.statisticTd}>MAC Address</td>
										<td className={tableStyles.statisticTd}>IP</td>
										<td className={tableStyles.statisticTd}>Created Date</td>
										<td className={tableStyles.statisticTd}>
											Power Consumption (Kw/H)
										</td>
										<td className={tableStyles.statisticTd}>Thao tac</td>
									</tr>
								</thead>
								<tbody name="dataBody">
									{dataTable.map((value) => {
										return (
											<tr className={tableStyles.statisticTr} key={value.id}>
												<td>{value.name}</td>
												<td>{value.macAddress}</td>
												<td>{value.ip}</td>
												<td>{value.createdDate}</td>
												<td>{value.powerConsumption}</td>
												<td>
													<FontAwesomeIcon
														icon={faCircleXmark}
														className="i"
														onClick={() => handleDeleteRow(value.id)}
														style={{
															fontSize: '1.8rem',
															color: 'red',
															cursor: 'pointer',
															marginLeft: '4px',
														}}
													/>
													<FontAwesomeIcon
														icon={faPencil}
														className="i"
														onClick={() => handleEditRow(value.id)}
														style={{
															fontSize: '1.8rem',
															color: 'blue',
															cursor: 'pointer',
															marginLeft: '4px',
														}}
													/>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
						<div className={styles.contentChart}>
							<div className={styles.contentChartImage}>
								<div className={styles.contentChartImageChild}>
									<DoughnutChart
										data={{
											labels: dataTable.map((value) => value.name),
											datasets: [
												{
													data: dataTable.map(
														(value) => value.powerConsumption
													),
													backgroundColor: renderColor(dataTable),
													borderColor: ['#F5F5F5'],
													borderWidth: 1,
													hoverOffset: 4,
												},
											],
										}}
										options={{
											responsive: true,
											plugins: {
												legend: {
													position: 'top',
												},
												title: {
													display: true,
													text: 'Chart.js Doughnut Chart',
												},
											},
										}}
									/>
								</div>
							</div>
							<div className={styles.contentChartForm}>
								<div className={styles.contentChartFormChild}>
									<div className={styles.deviceForm}>
										<div name="deviceForm" className="form-container">
											<div className="form-group">
												<input
													className={`form-control ${styles.deviceFormInput}`}
													type="text"
													name="name"
													placeholder="name"
													onChange={handleChange}
												/>
											</div>
											{errors.name && (
												<span className={styles.deviceFormError}>
													{errors.name}
												</span>
											)}
											<div className="form-group">
												<input
													className={`form-control ${styles.deviceFormInput}`}
													name="macAddress"
													placeholder="MAC Address	"
													onChange={handleChange}
												/>
											</div>
											{errors.macAddress && (
												<span className={styles.deviceFormError}>
													{errors.macAddress}
												</span>
											)}
											<div className="form-group">
												<input
													className={`form-control ${styles.deviceFormInput}`}
													name="ip"
													placeholder="IP"
													onChange={handleChange}
												/>
											</div>
											{errors.ip && (
												<span className={styles.deviceFormError}>
													{errors.ip}
												</span>
											)}
											<div className="form-group">
												<input
													className={`form-control ${styles.deviceFormInput}`}
													name="powerConsumption"
													placeholder="Power Consumption (Kw/H)"
													onChange={handleChange}
												/>
											</div>
											{errors.powerConsumption && (
												<span className={styles.deviceFormError}>
													{errors.powerConsumption}
												</span>
											)}
											<div className="form-group">
												<div className={styles.deviceFormAuth}>
													<button
														className={`btn ${styles.btnDevice}`}
														onClick={handleAddDevice}
													>
														ADD DEVICE
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
