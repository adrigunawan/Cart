import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AddingNumber() {
  const [count, setCount, minesCount] = useState(0);
  let addingNumber = () => setCount((prevCount) => prevCount + 1);
  let minesNumber = () => setCount((prevCount) => prevCount - 1);
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={minesNumber}>
          <Text>-</Text>
        </TouchableOpacity>
        <View style={styles.countContainer}>
          <Text>{count}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={addingNumber}>
          <Text style={{ textAlign: "center" }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 10,
  },
  countContainer: {
    borderWidth: 0.8,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
    paddingHorizontal: 15,
  },
});
