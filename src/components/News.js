import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import New from "./New";
import api from "../services/api";
import { useNotices } from "../contexts/notices";

export default function News({ navigation }) {
  const [news, setNews] = useState([]);
  const { config, reload } = useNotices();

  useEffect(() => {
    const findArticles = async () => {
      setNews([]);
      await api
        .get("articlesearch.json", (params = { q: config }))
        .then((res) => {
          setNews(res.data.response.docs);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    findArticles();
  }, [config, reload]);

  return (
    <View>
      {news && (
        <FlatList
          data={news}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => <New data={item} navigation={navigation} />}
        />
      )}
    </View>
  );
}
