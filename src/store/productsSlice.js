import { createSlice } from '@reduxjs/toolkit';

const intialState = {
    list: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState: intialState,
    reducers: {
        setProducts: (state, action) => {
            state.list = action.payload
        },

        addProduct: (state, action) => {
            if(state.list.find(product => product.title === action.payload.title)) {
                return
            }
            state.list.push(action.payload)
        }
    },
});

export const { setProducts, addProduct } = productsSlice.actions;
export default productsSlice.reducer;