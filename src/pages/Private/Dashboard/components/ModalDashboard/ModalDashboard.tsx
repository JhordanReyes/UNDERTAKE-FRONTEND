import React, { useState } from 'react';
import './ModalDashboard.css';
import Modal from '@mui/material/Modal';
import { Product } from '../../../../../models/Product';
import { addProduct, updateProduct } from '../../../../../services';
import { AlertIncompleteFields, AlertSucces } from '../../../../../components/Alerts';

export type ModalDashboardProps = {
	open: boolean,
	handleClose: Function,
	updateTableProducts: Function,
	product: Product,
	setProduct: Function
}

const ModalDashboard: React.FC<ModalDashboardProps> = ({ open, handleClose, updateTableProducts, product, setProduct }) => {

	const onSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (product.name === "" || product.description === "", product.price === 0) {
			AlertIncompleteFields();
			return
		}
		product.id === 0 ? await addProduct(product) : await updateProduct(product);
		updateTableProducts();
		handleClose();
		AlertSucces("Agregado correctamente", "Se agregó un producto a la Tabla.");
	}

	const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = target;
		setProduct({
			...product,
			[name]: value
		})
	}

	return (
		<Modal
			className='dashboard-modal'
			open={open}
			onClose={() => handleClose()}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<form
				className='dashboard-form'
				onSubmit={event => onSubmit(event)}
			>
				<i
					onClick={() => handleClose()}
					className='bx bx-x icon close'
				></i>
				<h2>{product.id === 0 ? "Agregar un Producto" : "Actualizar Producto"}</h2>
				<label
					htmlFor="name"
				>Nombre del Producto:</label>
				<input
					type="text"
					name='name'
					id='name'
					value={product.name}
					placeholder='Ingresar Nombre del Producto'
					onChange={event => onChange(event)}
				/>

				<label
					htmlFor="description"
				>Descripción del Producto:</label>
				<input
					type="text"
					name='description'
					id='description'
					value={product.description}
					placeholder='Ingresar una Descripción'
					onChange={event => onChange(event)}
				/>

				<label
					htmlFor="price">Precio:</label>
				<input
					type="number"
					id='price'
					name='price'
					value={product.price}
					placeholder='Ingresar Precio'
					onChange={event => onChange(event)}
				/>

				<input
					className='btn btn-success'
					type="submit"
					value={product.id === 0 ? "Agregar Producto" : "Actualizar Producto"}
				/>
			</form>
		</Modal>
	)
};

export default ModalDashboard;
