import ProductCatRow from "./ProductoCatRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ products, filterText, inStockOnly }) => {
    const rows = [];
    let lastCategory = null;
    products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) == -1) {
            return;

        }
        if (inStockOnly && !product.stocked) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCatRow
                    key={product.category}
                    category={product.category} />
            );

        }
        rows.push(
            <ProductRow
                key={product.name}
                product={product} />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

export default ProductTable;