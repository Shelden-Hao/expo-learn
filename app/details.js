import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>这里是详情页</Text>

      <Link href="../" style={styles.backText}>
        返回
      </Link>
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
    fontSize: 40,
    fontWeight: "bold",
    color: "#4f9df7",
  },
  backText: {
    marginTop: 20,
    fontSize: 20,
    color: "#67c1b5",
  },
});
