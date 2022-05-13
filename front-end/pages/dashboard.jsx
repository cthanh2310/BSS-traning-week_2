import { useCallback, useState, useMemo } from 'react';
import styles from '../styles/Dashboard.module.css';
import tableStyles from '../styles/Table.module.css';
import renderColor from '../utils/renderColor';
import DoughnutChart from '../components/DoughnutChart';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DeleteModal from '../components/DeleteModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircleXmark,
	faPencil,
	faBars,
} from '@fortawesome/free-solid-svg-icons';
import EditModal from '../components/EditModal';
import { validate } from '../utils/validator';
import { getCurrentTime } from '../utils/getCurrentTime';
import { useService } from '../hooks/useService';

export default function Dashboard(props) {
	const { services, reFetchServices } = useService();
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

	const handleChange = (event) => {
		event.persist();
		setValues({ ...values, [event.target.name]: event.target.value });
	};
	const handleAddDevice = async () => {
		const errors = validate(values);
		if (Object.keys(errors).length === 0) {
			const service = {
				...values,
				id: Date.now(),
				createdDate: getCurrentTime(),
			};
			try {
				const response = await fetch('http://localhost:5500/dashboard/create', {
					method: 'POST',
					body: JSON.stringify(service),
					headers: {
						'Content-Type': 'application/json',
					},
				})
					.then(function (response) {
						return response.json();
					})
					.then(function (data) {
						return data;
					});
				if (response.statusCode === 201) {
					reFetchServices();
				}
			} catch (error) {
				console.log('error', error);
			}
		}
		return setErrors(validate(values));
	};
	// Resolve delete actions
	const handleCloseDeleteModal = () => {
		setIsOpenDeleteModal(false);
	};
	const handleConfirmDeleteModal = async () => {
		try {
			const response = await fetch(
				`http://localhost:5500/dashboard/${idDelete}`,
				{
					method: 'DELETE',
				}
			)
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					return data;
				});
			if (response.statusCode === 201) {
				reFetchServices();
			}
			handleCloseDeleteModal();
		} catch (error) {
			console.log('error', error);
		}
	};
	const color = useMemo(() => renderColor(services), [services]);
	// Resolve edit actions
	const handleCloseEditModal = () => {
		setIsOpenEditModal(false);
	};
	const handleConfirmEditModal = useCallback(async (newDataRow) => {
		try {
			const response = await fetch('http://localhost:5500/dashboard/update', {
				method: 'PUT',
				body: JSON.stringify(newDataRow),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					return data;
				});
			if (response.statusCode === 201) {
				reFetchServices();
			}
			handleCloseEditModal();
		} catch (error) {
			console.log('error', error);
		}
	}, []);

	const handleEditRow = (id) => {
		const dataDetail = services.find((value) => value.id === id);
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
									{services.map((value) => {
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
											labels: services.map((value) => value.name),
											datasets: [
												{
													data: services.map((value) => value.powerConsumption),
													backgroundColor: color,
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
export async function getServerSideProps(context) {
	console.log('cookie', context.req.cookies);
	if (context.req.cookies.token !== 'john-token-123/231-454564') {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}
	return {
		props: context.req.cookies,
	};
}
