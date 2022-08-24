import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import Routers from "./Routes/Routers";
import Routers from "./Routes/index";
export default function App() {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
}
