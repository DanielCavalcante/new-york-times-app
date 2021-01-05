import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import News from "../components/News";

export default function Home({ navigation }) {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text style={styles.text}>Articles</Text>
          <News navigation={navigation} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    marginLeft: 10,
    fontWeight: "bold",
  },
});
