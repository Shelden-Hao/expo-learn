import { Slot } from "expo-router";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Layout() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>App header</Text>
      <Slot />
      <Text style={styles.footer}>© 版权所有</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
  },
  footer: {
    fontSize: 18,
    textAlign: "center",
  },
});
