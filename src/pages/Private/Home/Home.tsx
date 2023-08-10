import React, { useEffect, useState } from 'react';
import './Home.css';
import { User } from '../../../models';
import { getUsers } from '../../../services';
import { Products } from './components/Products';

export type HomeProps = {
}

const Home: React.FC<HomeProps> = ({ }) => {

	const [users, setUsers] = useState<User[]>([])

	const findAll = async () => {
		const data = await getUsers();
		setUsers(data)
	}

	useEffect(() => {
		findAll()
	}, [])


	return (
		<div className='main'>
			<h2>Productos</h2>
			<Products />
		</div>
	)
};

export default Home;
