import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import New from "./New";
import api from "../services/api";

export default function News({ navigation }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    api
      .get("articlesearch.json", (params = { q: "technology" }))
      .then((res) => {
        setNews(res.data.response.docs);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .get("articlesearch.json", (params = { q: "science" }))
      .then((res) => {
        setNews(res.data.response.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={news}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => <New data={item} navigation={navigation} />}
      />
    </View>
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
    fontSize: 80,
  },
});
