import { configureStore } from "@reduxjs/toolkit";
import search from "./searchSlice";
import favoriteCoins from "./favoriteCoinsSlice";

export const store = configureStore({
  reducer: {
    search,
    favoriteCoins,
  },
});
