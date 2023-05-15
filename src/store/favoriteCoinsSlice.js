import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coinId: [],
};

export const favoriteCoinsSlice = createSlice({
  name: "favoriteCoins",
  initialState,
  reducers: {
    favoriteCoins: (state, aciton) => {
      state.coinId.push(aciton.payload);
    },
  },
});

export const { favoriteCoins } = favoriteCoinsSlice.actions;

export default favoriteCoinsSlice.reducer;
