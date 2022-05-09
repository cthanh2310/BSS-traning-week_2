import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { memo } from 'react';

export default memo(function DoughnutChart(props) {
	const { data, options } = props;
	return <Doughnut data={data} options={options} />;
});
