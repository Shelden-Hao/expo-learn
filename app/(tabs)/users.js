import {View, Text, StyleSheet} from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>这里是用户页</Text>
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
    color: '#e29447',
  },
});
