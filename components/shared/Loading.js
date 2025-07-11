import { ActivityIndicator, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <ActivityIndicator size="small" color="#1f99b0" style={styles.loading} />
  );
}

const styles = StyleSheet.create({
  loading: {
    backgroundColor: "#fff",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
});
