import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Linking,
  Button,
  Alert,
} from "react-native";
import moment from "moment";

export default function Detail({ navigation, route }) {
  const [publicationData, setPublicationData] = useState(
    moment(route.params.data.pub_date).format("DD/MM/YYYY - hh:mm:ss")
  );

  async function openOriginalPost() {
    const url = route.params.data.web_url;
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{route.params.data.headline.main}</Text>
        <Image
          style={styles.image}
          source={{
            uri: `http://www.nytimes.com/${route.params.data.multimedia[0].url}`,
          }}
        />
        <Text style={styles.publicationData}>{publicationData}</Text>
        <Text style={styles.abstract}>{route.params.data.lead_paragraph}</Text>
        <Text style={styles.abstract}>{route.params.data.abstract}</Text>
        <Text style={styles.writtenBy}>
          {route.params.data.byline.original}
        </Text>
        <Button
          title="Go to original post"
          onPress={() => openOriginalPost()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    height: "100%",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  abstract: {
    fontSize: 16,
    color: "#5F5F5F",
  },
  publicationData: {
    fontSize: 14,
    color: "#5F5F5F",
    textAlign: "right",
    marginBottom: 10,
  },
  image: {
    borderRadius: 5,
    height: 200,
    marginBottom: 10,
    marginTop: 10,
  },
  writtenBy: {
    fontSize: 14,
    color: "#5F5F5F",
    marginTop: 10,
  },
});
