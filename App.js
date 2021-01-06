import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Detail from "./src/screens/Detail";
import { NoticeProvider } from "./src/contexts/notices";

const Stack = createStackNavigator();

export default () => {
  return (
    <NoticeProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          ></Stack.Screen>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Detail"
            component={Detail}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NoticeProvider>
  );
};
