import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CoinList from "../screens/CoinList";
import SavedCoins from "../screens/Saved";

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>My Wallet!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Coin List"
        component={CoinList}
        options={{
          tabBarLabel: "Coin List",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Saved Coins"
        component={SavedCoins}
        options={{
          tabBarLabel: "Saved",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cards-heart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Wallet"
        component={Profile}
        options={{
          tabBarLabel: "Wallet",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
