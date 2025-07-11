import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [courses, setCourses] = useState([]);

  /**
   * 获取搜索接口课程数据
   * @returns {Promise<void>}
   */
  const fetchData = async () => {
    const res = await fetch('http://192.168.1.138:3000/search');
    const { data } = await res.json();
    setCourses(data.courses);
    console.log('获取到的数据是：', data.courses);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {courses.map((course) => (
        <Text key={course.id}>
          {course.name}
        </Text>
      ))}

      {/* <Button title='获取课程' onPress={fetchData}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
