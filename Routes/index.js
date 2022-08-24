import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../Screens/Cart";

const Stack = createNativeStackNavigator();

export default function Routers() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tas Belanja" component={Cart} />
    </Stack.Navigator>
  );
}
