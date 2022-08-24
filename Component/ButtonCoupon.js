import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar, View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
export default function ButtonCoupon() {
  const press = () => alert("Love u :*");
  return (
    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
      <TouchableOpacity
        onPress={press}
        style={{
          borderWidth: 1,
          padding: 13,
          paddingHorizontal: 30,
          margin: 12,
          borderRadius: 10,
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ color: "#2d2d2d" }}>Terapkan</Text>
      </TouchableOpacity>
    </View>
  );
}
