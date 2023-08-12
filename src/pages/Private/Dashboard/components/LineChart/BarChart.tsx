import React from 'react';
import './BarChart.css';

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
	Legend,
	BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export type LineChartProps = {
}

const labels = ['Ingresos', "Gastos"];

export const data = {
	Title: "adad",
	labels,
	datasets: [
		{
			label: "Dinero",
			data: [120, 100],
			backgroundColor: ['rgba(159, 255, 99, 0.5)', "rgba(255, 99, 132, 0.5)"],
		},
	],
};


const BarChart: React.FC<LineChartProps> = ({ }) => {
	return (
		<div className='grafico'>
			<Bar data={data} />
		</div>
	)
};

export default BarChart;
