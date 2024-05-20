import { configureStore } from '@reduxjs/toolkit'
import products from './productsSlice'

const store = configureStore({
    reducer: { products }
})

export default store 