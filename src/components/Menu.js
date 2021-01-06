import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNotices } from "../contexts/notices";

export default Menu = () => {
  const { setConfigData } = useNotices();

  const getNotices = (type) => {
    setConfigData(type);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.optionContainer}>
        <Text style={styles.title} onPress={() => getNotices("technology")}>
          Technology
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => getNotices("science")}
        style={styles.optionContainer}
      >
        <Text style={styles.title}>Science</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 71,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "20%",
    paddingRight: "20%",
  },
  optionContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
