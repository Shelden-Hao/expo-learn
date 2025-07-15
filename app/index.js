import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>这里是首页</Text>

      <TouchableOpacity onPress={() => router.navigate('/details')}>
        <Text style={styles.buttonText}>
          跳转（navigate ）
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace('/details')}>
        <Text style={styles.buttonText}>
          替换（replace）
        </Text>
      </TouchableOpacity>
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
  buttonText: {
    marginTop: 20,
    fontSize: 25,
    color: "#ff7f6f",
  },
});
