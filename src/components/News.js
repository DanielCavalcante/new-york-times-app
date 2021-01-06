import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useNotices } from "../contexts/notices";
import New from "./New";
import api from "../services/api";

export default function News() {
  const navigation = useNavigation();

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
          renderItem={({ item }) => <New data={item} />}
        />
      )}
    </View>
  );
}
