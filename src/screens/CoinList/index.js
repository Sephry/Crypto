import { View, SafeAreaView, FlatList, Pressable } from "react-native";
import React, { useState, useEffect } from "react";

import Title from "./components/Title";
import SearchBox from "./components/SearchBox";
import ListItems from "./components/ListItems";

import axios from "axios";
import { useSelector } from "react-redux";

export default function CoinList() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = new useState([]);

  const searchCoin = useSelector((state) => state.search.searchValue);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en",
    })
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (searchCoin) {
      const newData = data.filter(
        (item) => item.id === searchCoin.toLowerCase()
      );
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  }, [searchCoin]);

  return (
    <SafeAreaView className="flex-1 justify-start items-center mt-10 ">
      {/* Title */}
      <View className="h-1/4 justify-center items-center">
        <Title children="Sephry Coin" />
      </View>

      {/* Search Box */}
      <View className="w-5/6 justify-center items-center">
        <SearchBox />
      </View>

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
}
