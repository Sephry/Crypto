import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchData: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { searchData } = searchSlice.actions;

export default searchSlice.reducer;
