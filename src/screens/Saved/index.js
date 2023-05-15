import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import ListItems from "./components/ListItems";
import { useDispatch, useSelector } from "react-redux";

const SavedCoins = () => {
  const favoriteCoinsSelector = useSelector(
    (state) => state.favoriteCoins.coinId
  );

  const dispatch = useDispatch();

  const {
    id,
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
  } = favoriteCoinsSelector;

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784" || "white";

  const normalizeMarketCap = (marketCap) => {
    if (marketCap > 1e12) {
      return `${(marketCap / 1e12).toFixed(3)} T`;
    }
    if (marketCap > 1e9) {
      return `${(marketCap / 1e9).toFixed(3)} B`;
    }
    if (marketCap > 1e6) {
      return `${(marketCap / 1e6).toFixed(3)} M`;
    }
    if (marketCap > 1e3) {
      return `${(marketCap / 1e3).toFixed(3)} K`;
    }
    return marketCap;
  };

  return (
    <SafeAreaView className="flex-1 justify-start items-center mt-10 ">
      {/* FlatList */}
      <View className="w-screen">
        <FlatList
          data={filteredData}
          renderItem={({ item }) => <ListItems marketCoin={item} />}
          initialNumToRender={10}
          ItemSeparatorComponent={() => (
            <View
              style={{
                backgroundColor: "#282828",
                height: 1,
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SavedCoins;
