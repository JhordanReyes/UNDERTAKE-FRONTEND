import React from 'react';
import './TableProducts.css';
import { Product } from '../../../../../models/Product';

import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { deleteProduct, getProductById } from '../../../../../services';
import { Paper, TableContainer } from '@mui/material';

export type TableProductsProps = {
	updateTableProducts: Function,
	handleOpen: Function,
	products: Product[],
	setProduct: Function
}

const TableProducts: React.FC<TableProductsProps> = ({ products, updateTableProducts, handleOpen, setProduct }) => {

	const handleDeleteProduct = async (id: number) => {
		await deleteProduct(id);
		updateTableProducts();
	}

	const handleUpdateProduct = async (id: number) => {
		const data = await getProductById(id);
		setProduct({ ...data });
		handleOpen();
	}

	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'name', headerName: 'Name', width: 130, flex: 2 },
		{ field: 'description', headerName: 'Description', width: 130, flex: 2 },
		{
			field: 'price', headerName: 'Price', width: 130, flex: 1,
			renderCell: (params: GridRenderCellParams) => `S./${params.value}`
		},
		{
			field: '', headerName: 'Opciones', width: 130, flex: 2,
			renderCell: (params: GridRenderCellParams) => <>
				<button
					className='btn btn-error button'
					onClick={() => handleDeleteProduct(Number(params.id))}
				>Eliminar</button>
				<button
					className='btn btn-primary button ml-1'
					onClick={() => handleUpdateProduct(Number(params.id))}
				>Editar</button>
			</>
		}
	];

	return (
		<div className='mt-1' style={{ height: 400 }}>
			<TableContainer component={Paper}>
				<DataGrid
					sx={{
						minWidth: 1000,
					}}
					className='table'
					aria-label="simple table"
					rows={products}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: { page: 0, pageSize: 5 },
						},
					}}
					pageSizeOptions={[5, 10]}
				/>
			</TableContainer>
		</div >
	)
};

export default TableProducts;