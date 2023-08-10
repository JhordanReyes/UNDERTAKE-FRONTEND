import React from 'react';
import './LineChart.css';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export type LineChartProps = {
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
	labels,
	datasets: [
		{
			label: 'Ganancias',
			data: [20,45,60,10,30,0,10],
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		}
	],
};
const LineChart: React.FC<LineChartProps> = ({ }) => {
	return (
		<div>
			<Line data={data} />
		</div>
	)
};

export default LineChart;
