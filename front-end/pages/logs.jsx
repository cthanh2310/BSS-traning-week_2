import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import styles from '../styles/Logs.module.css';
import tableStyles from '../styles/Table.module.css';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSearch,
	faAnglesLeft,
	faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';

export default function Logs(props) {
	// const dataRoot = [...props.renponse.data];
	const [dataTable, setDataTable] = useState(props.response.data);
	const dataRoot = props.response.data.map((i) => i);
	const itemsPerPage = 17;
	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(dataTable.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(dataTable.length / itemsPerPage));
	}, [itemOffset, itemsPerPage]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % dataTable.length;
		setItemOffset(newOffset);
	};

	const handleSearch = (e) => {
		if (e.target.value !== '') {
			let dataLogsSearched = [];
			dataTable.forEach((data) => {
				if (data.name.toLowerCase().includes(e.target.value.toLowerCase())) {
					dataLogsSearched.push(data);
				}
			});
			setDataTable(dataLogsSearched);
			setPageCount(Math.ceil(dataLogsSearched.length / itemsPerPage));
			setItemOffset(0);
			setCurrentItems(dataLogsSearched.slice(0, itemsPerPage));
		} else {
			setDataTable(dataRoot);
			setPageCount(Math.ceil(dataRoot.length / itemsPerPage));
			setItemOffset(0);
			setCurrentItems(dataRoot.slice(0, itemsPerPage));
		}
	};
	return (
		<div className="container">
			<div className="dashboard">
				<Sidebar />
				<Header />
				<div className="main">
					<div className="content">
						<div className="contentHeader">
							<div>
								<h1>Action Logs</h1>
							</div>
							<div className={styles.search}>
								<input
									type="text"
									className={styles.searchInput}
									id="search-action"
									placeholder="Tìm kiếm"
									onChange={(e) => handleSearch(e)}
								/>
								<div style={{ display: 'flex', marginRight: '10px' }}>
									<FontAwesomeIcon
										icon={faSearch}
										className="fa-2x"
										style={{ maginRight: '10px' }}
									/>
								</div>
							</div>
						</div>
						<div
							className={
								(tableStyles.contentTable, tableStyles.contentTableSearch)
							}
						>
							<table className={tableStyles.statisticTable}>
								<thead className={tableStyles.statisticThead}>
									<tr className={tableStyles.statisticTrModifier}>
										<td className={tableStyles.statisticTd}>Device ID</td>
										<td className={tableStyles.statisticTd}>Name</td>
										<td className={tableStyles.statisticTd}>Action</td>
										<td className={tableStyles.statisticTd}>Date</td>
									</tr>
								</thead>
								<tbody id="dataBody">
									{currentItems &&
										currentItems.map((value) => {
											return (
												<tr className={tableStyles.statisticTr} key={value.id}>
													<td>{value.id}</td>
													<td>{value.name}</td>
													<td>{value.action}</td>
													<td>{value.createdDate}</td>
												</tr>
											);
										})}
								</tbody>
							</table>
						</div>
						<ReactPaginate
							previousLabel={<FontAwesomeIcon icon={faAnglesLeft} />}
							onPageChange={handlePageClick}
							pageCount={pageCount}
							nextLabel={<FontAwesomeIcon icon={faAnglesRight} />}
							pageClassName={styles.pageItem}
							previousClassName={styles.pageItem}
							nextClassName={styles.pageItem}
							breakLabel="..."
							pageLinkClassName={styles.pageLink}
							previousLinkClassName={styles.pageLink}
							nextLinkClassName={styles.pageLink}
							breakLinkClassName={styles.pageLink}
							breakClassName={styles.pageItem}
							containerClassName={styles.contentPagination}
							activeClassName={styles.pageItemActive}
							renderOnZeroPageCount={null}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export async function getServerSideProps(context) {
	const res = await fetch(`http://localhost:5500/logs/`);
	const response = await res.json();
	console.log('context', context);
	if (!res.json()) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			response,
		}, // will be passed to the page component as props
	};
}
