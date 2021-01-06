import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import moment from "moment";

export default function New({ navigation, data }) {
  const [title, setTitle] = useState(data.headline.main);
  const [resume, setResume] = useState(data.snippet);
  const [publicationData, setPublicationData] = useState(
    moment(data.pub_date).format("DD/MM/YYYY - hh:mm:ss")
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Detail", { data: data })}
      >
        <Image
          style={styles.image}
          source={{
            uri: `http://www.nytimes.com/${
              data.multimedia[0] ? data.multimedia[0].url : ``
            }`,
          }}
        />

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.resume}>{resume}</Text>
        <Text style={styles.publicationDate}>{publicationData}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#FFF",
    margin: 10,
    borderRadius: 10,
  },
  title: {
    flexDirection: "row",
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
    fontWeight: "bold",
  },
  resume: {
    flexDirection: "row",
    fontSize: 12,
    color: "#5f5f5f",
    marginBottom: 10,
  },
  publicationDate: {
    fontSize: 12,
    color: "#5f5f5f",
    textAlign: "right",
  },
  image: {
    height: 80,
    borderRadius: 5,
    marginBottom: 5,
  },
});
