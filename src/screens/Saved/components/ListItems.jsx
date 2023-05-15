import { View, Text, Image, StyleSheet, Pressable, Button } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const ListItems = ({ marketCoin }) => {
  const {
    id,
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
  } = marketCoin;

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
    <>
      <Pressable className="p-6 flex-row ">
        <Image
          source={{ uri: image }}
          style={{
            height: 30,
            width: 30,
            marginRight: 10,
            alignSelf: "center",
          }}
        />
        <View>
          <Text className="text-black font-bold text-base mb-1">{name}</Text>

          <View className="flex-row">
            <View className="px-1 mr-1 rounded bg-[#585858] ">
              <Text className="text-white">{market_cap_rank}</Text>
            </View>

            <Text className="text-black mr-1">{symbol.toUpperCase()}</Text>
            <AntDesign
              name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
              size={12}
              color={percentageColor}
              className="self-center mr-1"
            />
            <Text style={{ color: percentageColor, letterSpacing: 1 }}>
              {price_change_percentage_24h.toFixed(2)}%
            </Text>
          </View>
        </View>

        <View className="ml-auto items-end">
          <Text className="text-black font-bold text-base mb-1">
            {current_price}
          </Text>
          <Text className="text-black">
            MCap {normalizeMarketCap(market_cap)}
          </Text>
        </View>
      </Pressable>
    </>
  );
};

export default ListItems;
