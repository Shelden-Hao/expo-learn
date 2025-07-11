import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Loading from "./components/shared/Loading";

export default function App() {
  const [courses, setCourses] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);

  /**
   * 获取搜索接口课程数据
   * @returns {Promise<void>}
   */
  const fetchData = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const res = await fetch(`http://192.168.1.138:3000/search?q=${keyword}`);
      const { data } = await res.json();
      setCourses(data.courses);
      console.log("获取到的数据是：", data.courses);
    } catch (error) {
      console.log("获取数据失败：", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [keyword]);

  return (
    <View style={styles.container}>
      <Text>请输入关键字</Text>
      <TextInput
        style={styles.input}
        placeholder="请输入关键字"
        value={keyword}
        onChangeText={setKeyword}
        defaultValue={keyword}
      />
      {loading ? (
        <Loading />
      ) : (
        courses.map((course) => <Text key={course.id}>{course.name}</Text>)
      )}
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
