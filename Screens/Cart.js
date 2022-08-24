import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import TotalPrice from "../Component/TotalPrice";
import Line from "../Component/Line";
import ButtonBuy from "../Component/ButtonBuy";
import DetailCart from "../Component/DetailCart";
import ButtonCoupon from "../Component/ButtonCoupon";
import Products from "../Component/Products";
export default function Cart({ navigation }) {
  const [text, onChangeText] = React.useState(null);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Products />
      </View>
      <View style={{ backgroundColor: "#fff" }}>
        <Text style={{ fontSize: 18, fontWeight: "700", marginLeft: 15, marginBottom: 14 }}>Promosi Dan Diskon</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={{
              borderWidth: 1,
              width: "57%",
              height: "60%",
              borderRadius: 10,
              marginVertical: 10,
              textAlign: "center",
              marginLeft: 10,
            }}
            onChangeText={onChangeText}
            value={text}
            placeholder="Masukan Kupon..."
          />
          <ButtonCoupon />
        </View>
        <Line />
        <DetailCart />
        <Line />
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 25 }}>
          <View>
            <TotalPrice />
          </View>
          <View>
            <ButtonBuy />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },

  header: {
    color: "#adb8ae",
    fontSize: 10,
    marginHorizontal: 4,
  },

  textCode: {
    textAlign: "center",
    fontSize: 24,
    marginVertical: 3,
  },

  textTanggal: {
    color: "#adb8ae",
    textAlign: "center",
    fontSize: 10,
    marginRight: 6,
  },

  productContainer: {
    backgroundColor: "white",
    height: 400,
  },

  headerProduk: {
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
