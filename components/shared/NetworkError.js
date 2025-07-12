import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { StyleSheet, Text, View } from "react-native";

export default function NetworkError() {
  return (
    <View style={styles.container}>
      <SimpleLineIcons name={"drawer"} size={160} color={"#ddd"} />
      <Text style={styles.title}>抱歉，网络连接出错了！</Text>
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
  title: {
    color: "#999",
  },
});
