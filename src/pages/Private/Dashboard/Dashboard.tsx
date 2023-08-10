import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { INITIAL_STATE_PRODUCT, Product } from '../../../models/Product';
import { getProducts } from '../../../services';
import { LineChart, ModalDashboard, TableProducts } from './components';
import useDashboard from './hooks/useDashboard';

export type DashboardProps = {
}

const Dashboard: React.FC<DashboardProps> = ({ }) => {

	const { open, product, products, handleOpen, handleClose, updateTableProducts, setProduct } = useDashboard();

	return (
		<main className='main'>
			<h2>Mis Productos</h2>
			<button
				className='button btn btn-primary'
				onClick={handleOpen}
			><i className='bx bx-plus'></i> Nuevo Producto</button>
			<ModalDashboard handleClose={handleClose} open={open} updateTableProducts={updateTableProducts} product={product} setProduct={setProduct} />
			<TableProducts handleOpen={handleOpen} products={products} updateTableProducts={updateTableProducts} setProduct={setProduct} />
			<LineChart />
		</main>
	)
};

export default Dashboard;
