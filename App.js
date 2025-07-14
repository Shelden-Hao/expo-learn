import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import useFetchData from "./hooks/useFetchData";

export default function App() {
  const [keyword, setKeyword] = useState("");
  const { data, loading, error, onReload } = useFetchData("/search", { q: "" });
  const { courses } = data;

  return (
    <View style={styles.container}>
      <Text>您搜索的关键词是：{keyword}</Text>

      <TextInput
        style={styles.input}
        placeholder="请填写要所搜索的课程!"
        onChangeText={(text) => setKeyword(text)}
        defaultValue={keyword}
      />

      {courses.map((course) => (
        <Text key={course.id}>{course.name}</Text>
      ))}
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
  input: {
    height: 40,
    width: 300,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});
