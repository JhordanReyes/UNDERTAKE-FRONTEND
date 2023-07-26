import React from 'react';
import './Dashboard.css';

export type DashboardProps = {
}

const Dashboard: React.FC<DashboardProps>  = ({}) => {
	return (
		<div className='dashboard'>
			<p>Cosas del Dashboard</p>
		</div>
	)
};

export default Dashboard;
