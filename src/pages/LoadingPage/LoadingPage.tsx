import React from 'react';
import './LoadingPage.css';

export type LoadingPageProps = {
}

const LoadingPage: React.FC<LoadingPageProps> = ({ }) => {
	return (
		<div className='LoadingPageProps'>
			<div className="sk-chase">
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
				<div className="sk-chase-dot"></div>
			</div>
		</div>
	)
};

export default LoadingPage;
