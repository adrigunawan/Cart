import React from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import AddingNumber from "../Component/AddingNumber";
import ButtonDelete from "../Component/ButtonDelete";
export default function Products() {
  return (
    <View style={styles.productContainer}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "column" }}>
            <View style={{ height: 140, width: 110, backgroundColor: "#eee", borderRadius: 13, marginLeft: 15 }} />
            <ButtonDelete />
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                width: "60%",
                marginHorizontal: 15,
                marginVertical: 15,
                marginBottom: 3,
                color: "#2d2d2d",
              }}
            >
              Nama Produk Boleh Panjang dan boleh, XL Grey
            </Text>
            <Text style={{ fontSize: 15, width: "60%", marginHorizontal: 15, marginTop: 4, fontWeight: "bold" }}>
              Rp: 2.000.000
            </Text>
            <Text style={{ fontSize: 12, width: "60%", marginHorizontal: 13, marginVertical: 3 }}>
              SKU : 5677FGHHTY
            </Text>
            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: 12, width: "60%", marginHorizontal: 15, textAlign: "center" }}>Ukuran :</Text>
                <Text style={{ fontSize: 12, width: "60%", marginHorizontal: 16, marginTop: 5 }}>XL</Text>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text style={{textAlign: "center", marginBottom: 5, fontSize: 12}}>Kuantitas:</Text>
                <AddingNumber />
              </View>
            </View>
            <Text style={{ fontSize: 16, width: "60%", marginHorizontal: 15, marginTop: 15, textAlign: "right" }}>
              Rp: 4.000.000
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "column" }}>
            <View style={{ height: 140, width: 110, backgroundColor: "#eee", borderRadius: 13, marginLeft: 15 }} />
            <ButtonDelete />
          </View>
          <View style={{}}>
            <Text
              style={{
                fontSize: 16,
                width: "60%",
                marginHorizontal: 15,
                marginVertical: 15,
                marginBottom: 3,
                color: "#2d2d2d",
              }}
            >
              Nama Produk Boleh Panjang dan boleh, XL Grey
            </Text>
            <Text style={{ fontSize: 15, width: "60%", marginHorizontal: 15, marginTop: 4, fontWeight: "bold" }}>
              Rp: 2.000.000
            </Text>
            <Text style={{ fontSize: 12, width: "60%", marginHorizontal: 13, marginVertical: 3 }}>
              SKU : 5677FGHHTY
            </Text>
            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: 12, width: "60%", marginHorizontal: 15, textAlign: "center" }}>Ukuran :</Text>
                <Text style={{ fontSize: 12, width: "60%", marginHorizontal: 16, marginTop: 5 }}>XL</Text>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    marginHorizontal: 15,
                    marginBottom: 5
                  }}
                >
                  Kuantitas :
                </Text>
                <AddingNumber />
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 16, width: "60%", marginHorizontal: 15, marginTop: 10, textAlign: "right" }}>
                Rp: 4.000.000
              </Text>
            </View>
          </View>
        </View>
        <View style={{ borderWidth: 0.4, marginLeft: 10, width: "67%", marginTop: 15 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    marginTop: 20,
    backgroundColor: "white",
  },

  headerProduk: {
    marginBottom: 15,
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
