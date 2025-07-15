import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Course() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>这里是课程页</Text>
      <Text style={styles.info}>课程ID: {id}</Text>

      <TouchableOpacity onPress={() => router.setParams({ title: '课程太好了！' })}>
        <Text style={styles.buttonText}>修改标题</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4f9df7',
  },
  info: {
    marginTop: 20,
    fontSize: 20,
    color: '#67c1b5',
  },
  buttonText: {
    marginTop: 20,
    fontSize: 25,
    color: '#ff7f6f',
  },
});
