import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NetworkError from "./components/shared/NetworkError";

export default function App() {
  const [courses, setCourses] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState(false);

  /**
   * 获取搜索接口课程数据
   * @returns {Promise<void>}
   */
  const fetchData = async () => {
    try {
      const res = await fetch(`http://192.168.1.138/search?q=${keyword}`);
      const { data } = await res.json();
      setCourses(data.courses);
      console.log("获取到的数据是：", data.courses);
    } catch (error) {
      console.error("获取数据失败：", error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {error ? (
        <NetworkError />
      ) : (
        <>
          {courses.map((course) => (
            <Text key={course.id}>{course.name}</Text>
          ))}
          <TouchableOpacity style={styles.reload}>
            <Text style={styles.label}>重新加载</Text>
          </TouchableOpacity>
        </>
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
