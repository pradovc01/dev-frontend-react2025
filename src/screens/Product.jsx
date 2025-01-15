import FilProductTable from "../components/Product/FilProductTable"
import React from "react"
import { useSelector } from "react-redux"
const Product = () => {

    const PRODUCTS = useSelector(state => state.productr.products)
    return (
        <>
            <FilProductTable products={PRODUCTS} />
        </>
    )

}
export default Product