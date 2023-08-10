import { useEffect, useState } from "react";
import { INITIAL_STATE_PRODUCT, Product } from "../../../../models/Product";
import { getProducts } from "../../../../services";

const useDashboard = () => {
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([])
    const [product, setProduct] = useState<Product>(INITIAL_STATE_PRODUCT);

    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false);
        setProduct(INITIAL_STATE_PRODUCT);
    }

    const updateTableProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    }

    useEffect(() => {
        updateTableProducts();
    }, [])

    return {
        open,
        product,
        products,

        setProduct,
        handleOpen,
        handleClose,
        updateTableProducts
    }
}

export default useDashboard;