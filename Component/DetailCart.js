import { View, Text } from "react-native";
import React from "react";

export default function DetailCart() {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text style={{ fontSize: 18, fontWeight: "700", marginLeft: 15, marginTop: 10 }}>Ringkasan Belanja</Text>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{ fontSize: 15, fontWeight: "700", marginLeft: 15, marginTop: 10 }}>Sub Total</Text>
          <Text style={{ fontSize: 15, fontWeight: "700", marginLeft: 15, marginTop: 10, paddingHorizontal: 10 }}>Rp 8.000.000</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{ fontSize: 15, fontWeight: "700", marginLeft: 15, marginTop: 10 }}>Diskon</Text>
          <Text style={{ fontSize: 14, fontWeight: "700", marginLeft: 15, marginTop: 10, paddingHorizontal: 13}}>-</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{ fontSize: 15, fontWeight: "700", marginLeft: 15, marginTop: 10 }}>Total</Text>
          <Text style={{ fontSize: 15, fontWeight: "700", marginLeft: 15, marginTop: 10, paddingHorizontal: 13}}>Rp 8.000.000</Text>
        </View>
      </View>
    </View>
  );
}
