import React from 'react';
import './NotFound.css';

export type NotFoundProps = {
}

const NotFound: React.FC<NotFoundProps>  = ({}) => {
	return (
		<div className='notfound'>
			<p>Not Found</p>
			<p className='pageError'>404</p>
			<p>Página no encontrada</p>
		</div>
	);
};

export default NotFound;
