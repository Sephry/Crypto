import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Input } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "../../../store/searchSlice";

const SearchBox = () => {
  const search = useSelector((state) => state.search.searchValue);

  const dispatch = useDispatch();

  const handleChangeSearch = (e) => {
    dispatch(searchData(e));
  };

  return (
    <Input
      placeholder="Search"
      rightIcon={<AntDesign name="search1" size={24} color="black" />}
      onChangeText={handleChangeSearch}
    />
  );
};

export default SearchBox;
