import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./LoginPage";
import Page1Screen from "./subScreens/Screen1";
import Page2Screen from "./subScreens/Screen2";
import Page3Screen from "./subScreens/Screen3";

const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Page1" component={Page1Screen} />
        <Drawer.Screen name="Page2" component={Page2Screen} />
        <Drawer.Screen name="Page3" component={Page3Screen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
