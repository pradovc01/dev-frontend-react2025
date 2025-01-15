
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    //here define all global variables of Counter.jsx component
    initialValue: 10,
    isLogged: 'testing',
    dataProduct: [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]
}

export const productSlice2 = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setInitialValueData: (state, payload) => {
            state.initialValue = payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setInitialValueData } = productSlice2.actions

export default productSlice2.reducer
