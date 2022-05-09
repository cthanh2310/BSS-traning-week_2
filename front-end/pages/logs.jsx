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
const dataRoot = [
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 1 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 2 },
	{ name: 'Refrigerator', action: 'Sleep', createdDate: '31-05-2021', id: 3 },
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 4,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 5 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 6 },
	{ name: 'Refrigerator', action: 'Sleep', createdDate: '31-05-2021', id: 7 },
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 8,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 9 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 10 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 11,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 12,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 13 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 14 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 15,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 16,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 17 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 18 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 19,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 20,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 21 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 22 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 23,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 24,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 25 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 26 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 27,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 28,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 29 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 30 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 31,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 32,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 33 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 34 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 35,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 36,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 37 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 38 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 39,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 40,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 41 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 42 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 43,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 44,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 45 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 46 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 47,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 48,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 49 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 50 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 51,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 52,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 53 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 54 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 55,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 56,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 57 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 58 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 59,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 60,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 61 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 62 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 63,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 64,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 65 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 66 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 67,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 68,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 69 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 70 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 71,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 72,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 73 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 74 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 75,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 76,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 77 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 78 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 79,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 80,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 81 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 82 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 83,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 84,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 85 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 86 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 87,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 88,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 89 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 90 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 91,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 92,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 93 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 94 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 95,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 96,
	},
	{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 97 },
	{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 98 },
	{
		name: 'Refrigerator',
		action: 'Sleep',
		createdDate: '31-05-2021',
		id: 99,
	},
	{
		name: 'Selling Fan',
		action: 'Not working!!!',
		createdDate: '31-05-2021',
		id: 100,
	},
];
export default function Logs() {
	const [dataTable, setDataTable] = useState([
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 1 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 2 },
		{ name: 'Refrigerator', action: 'Sleep', createdDate: '31-05-2021', id: 3 },
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 4,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 5 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 6 },
		{ name: 'Refrigerator', action: 'Sleep', createdDate: '31-05-2021', id: 7 },
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 8,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 9 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 10 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 11,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 12,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 13 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 14 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 15,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 16,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 17 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 18 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 19,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 20,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 21 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 22 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 23,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 24,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 25 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 26 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 27,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 28,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 29 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 30 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 31,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 32,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 33 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 34 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 35,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 36,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 37 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 38 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 39,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 40,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 41 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 42 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 43,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 44,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 45 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 46 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 47,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 48,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 49 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 50 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 51,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 52,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 53 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 54 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 55,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 56,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 57 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 58 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 59,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 60,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 61 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 62 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 63,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 64,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 65 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 66 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 67,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 68,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 69 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 70 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 71,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 72,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 73 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 74 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 75,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 76,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 77 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 78 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 79,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 80,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 81 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 82 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 83,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 84,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 85 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 86 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 87,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 88,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 89 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 90 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 91,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 92,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 93 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 94 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 95,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 96,
		},
		{ name: 'TV', action: 'Turn on', createdDate: '31-05-2021', id: 97 },
		{ name: 'Washer', action: 'Turn Off', createdDate: '31-05-2021', id: 98 },
		{
			name: 'Refrigerator',
			action: 'Sleep',
			createdDate: '31-05-2021',
			id: 99,
		},
		{
			name: 'Selling Fan',
			action: 'Not working!!!',
			createdDate: '31-05-2021',
			id: 100,
		},
	]);
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
