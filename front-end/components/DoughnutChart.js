import { memo } from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export default memo(function DoughnutChart(props) {
	const { data, options } = props;
	return <Doughnut data={data} options={options} />;
});
