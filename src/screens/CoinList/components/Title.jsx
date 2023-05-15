import { Text } from "react-native";
import React from "react";

const Title = ({ children }) => {
  return (
    <Text className="text-3xl font-medium tracking-widest text-[#adb5bd] ">
      {children}
    </Text>
  );
};

export default Title;
