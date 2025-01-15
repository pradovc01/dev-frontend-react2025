import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setFilterText, toggleInStockOnly } from "../../store/features/product/productSlice.js"

const FilProductTable = ({ products }) => {

    const dispatch = useDispatch();
    const filterText = useSelector((state) => state.productr.filterText);
    const inStockOnly = useSelector((state) => state.productr.inStockOnly);
    return (
        <div>
            <SearchBar filterText={filterText}
                inStockOnly={inStockOnly} />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly} />
        </div>

    )
}
export default FilProductTable;