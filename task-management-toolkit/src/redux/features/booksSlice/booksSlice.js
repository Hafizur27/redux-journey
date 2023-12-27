import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    showBook: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const book = state?.books?.find((b) => b?.id === action?.payload.id); 

      if(book){
        const remining = state?.books?.filter((b) => b?.id !== action?.payload.id);
        const finalArray=[...remining,action.payload] 
        state.books=finalArray
      }else{
       state.books
      }
    },
    deleteBook: (state, action) => {
      const book = state.books.filter((b) => b.id !== action.payload);
      state.books = book;
    },
  },
});

export const { showBook, addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
