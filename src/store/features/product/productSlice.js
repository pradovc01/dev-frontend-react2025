import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    filterText: '',
    setFilterText: '',
    inStockOnly: false,
    setInStockOnly: false,


}

export const productSlice = createSlice(
    {
        name: 'products',
        initialState,
        reducers: {
            onFilterTextChange: (state, action) => {
                state.filterText = action.payload
            },
            onInStockOnlyChange: (state) => {
                state.inStockOnly = !state.inStockOnly
            }
        }
    }
)

export const { setFilterText, toggleInStockOnly } = productSlice.actions;
export default productSlice.reducer
