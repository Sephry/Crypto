import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoriteCoins } from "./../../../store/favoriteCoinsSlice";

const ModalContent = ({ marketCoin }) => {
  const {
    id,
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
    high_24h,
    low_24h,
  } = marketCoin;

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

  useEffect(() => {
    const favoriteCoinsSave = useSelector(
      (state) => state.favoriteCoins.coinId
    );

    console.log(favoriteCoinsSave);
  }, []);

  const dispatch = useDispatch();

  dispatch(favoriteCoins(name));

  return (
    <View style={styles.content}>
      <Image
        source={{ uri: image }}
        style={{
          height: 70,
          width: 70,
          alignSelf: "center",
          marginBottom: 8,
        }}
      />
      <Text className="text-2xl" style={{ letterSpacing: 5 }}>
        {name}
      </Text>

      <Text className="text-base mb-5 mt-1">{symbol.toUpperCase()}</Text>

      <View className="w-full flex-row justify-between items-center px-5 py-3">
        <Text className="text-base">
          24 Hour Change {price_change_percentage_24h.toFixed(2)}
        </Text>

        <Text className="text-base">Price {current_price}</Text>
      </View>

      <View className="w-full flex-row justify-between items-center px-5 py-3">
        <Text className="text-base">Market Cap Rank {market_cap_rank}</Text>
        <Text className="text-base">
          Market Cap {normalizeMarketCap(market_cap)}
        </Text>
      </View>

      <View className="w-full flex-row justify-between items-center px-5 py-3">
        <Text className="text-base">Today Low {low_24h}</Text>
        <Text className="text-base">Today High {high_24h}</Text>
      </View>

      <View className="w-full flex-row justify-between items-center px-5 py-3">
        <Text className="text-base">Today Low{} </Text>
      </View>

      <View className="w-full flex-row justify-around items-center pt-10">
        <Pressable className="bg-slate-700 p-3">
          <Text className="text-white uppercase">Add Favorite</Text>
        </Pressable>
        <Pressable className="bg-slate-700 p-3">
          <Text className="text-white uppercase">Buy Coin</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ModalContent;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    paddingTop: 50,
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
