import React, { useEffect, useState } from 'react';
import './Home.css';
import { getProducts, getUsers } from '../../../services';
import { Products } from './components/Products';
import { Product } from '../../../models/Product';

export type HomeProps = {
}

const Home: React.FC<HomeProps> = ({ }) => {

	const [products, setProducts] = useState<Product[]>([])

	const findAll = async () => {
		const data = await getProducts();
		setProducts(data);
	}

	useEffect(() => {
		findAll()
	}, [])


	return (
		<div className='main'>
			<h2>Home</h2>
			<Products products={products} />
		</div>
	)
};

export default Home;
