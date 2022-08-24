import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar, View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
export default function ButtonBuy() {
  const press = () => alert("Love u :*");
  return (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
      <TouchableOpacity
        onPress={press}
        style={{ borderWidth: 1, padding: 15    , paddingHorizontal: 80, margin: 10, borderRadius:10, backgroundColor:"black"}}
      >
        <Text style={{color: "#f2f2f2"}}>Beli</Text>
      </TouchableOpacity>
    </View>
  );
}
