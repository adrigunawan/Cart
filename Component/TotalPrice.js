import { View, Text } from "react-native";
import React from "react";

export default function TotalPrice() {
  return (
    <View>
      <View style={{ flexDirection: "column", width: "100%", marginLeft:4}}>
        <Text style={{ fontSize: 15, fontWeight: "700", marginLeft: 15, marginTop: 10 }}>Total Harga</Text>
        <Text style={{ fontSize: 15, fontWeight: "700", marginLeft: 5, marginTop: 5, paddingHorizontal: 10 }}>
          Rp 8.000.000
        </Text>
      </View>
    </View>
  );
}
