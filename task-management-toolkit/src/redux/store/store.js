import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "../features/booksSlice/booksSlice";

const store = configureStore({
    reducer: {
        books: booksSlice
    }
})
export default store;