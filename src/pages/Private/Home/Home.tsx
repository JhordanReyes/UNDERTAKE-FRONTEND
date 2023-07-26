import React from 'react';
import './Home.css';

export type HomeProps = {
}

const Home: React.FC<HomeProps>  = ({}) => {
	return (
		<div className='home'>
			<p>Cosas de la home</p>
		</div>
	)
};

export default Home;
