import React from 'react';
import './Products.css';
import { Product } from '../../../../../models/Product';

export type ProductsProps = {
	products: Product[]
}

const Products: React.FC<ProductsProps>  = ({products}) => {
	return (
		<div className='products'>
			{
				products.map(product => <p>{product.id} - {product.name}</p>)
			}
		</div>
	)
};

export default Products;
