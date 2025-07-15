import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>这里是首页</Text>
      <Link href="/details" style={styles.link}>
        跳转到详情页（Link）
      </Link>
      <Link href="/details" asChild>
        <TouchableOpacity>
          <Text style={styles.buttonText}>跳转到详情页（Link + asChild）</Text>
        </TouchableOpacity>
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
    color: "#e29447",
  },
  link: {
    marginTop: 20,
    fontSize: 20,
    color: "#1f99b0",
  },
  buttonText: {
    marginTop: 20,
    fontSize: 20,
    color: "#ff7f6f",
  },
});
