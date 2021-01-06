import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import News from "../components/News";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.text}>Articles</Text>
          <News />
        </SafeAreaView>
      </View>
      <Menu />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    marginLeft: 10,
    fontWeight: "bold",
  },
});
