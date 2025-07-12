import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { get } from "./utils/request";

export default function App() {
  const [courses, setCourses] = useState([]);
  const [keyword, setKeyword] = useState("");

  /**
   * 获取搜索接口课程数据
   * @returns {Promise<void>}
   */
  const fetchData = async () => {
    try {
      // const res = await fetch(`http://192.168.1.138/search?q=${keyword}`);
      // const res = await request("/search", { params: { q: keyword } });
      const res = await get("/search", { q: keyword });
      setCourses(res.data.courses);
      console.log("获取到的数据是：", res.data.courses);
    } catch (error) {
      console.error("获取数据失败：", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
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
});
