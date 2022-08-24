import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar, View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
export default function ButtonBuy() {
  const press = () => alert("Love u :*");
  return (
    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
      <TouchableOpacity
        onPress={press}
        style={{
          padding: 8,
          paddingRight: 45,
          margin: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "crimson" }}>Hapus</Text>
      </TouchableOpacity>
    </View>
  );
}
