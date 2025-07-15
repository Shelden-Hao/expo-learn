import { Link, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Link style={styles.link} href="/courses/1?title=Node.js">
        跳转传参（Link）
      </Link>

      <Link
        style={styles.link}
        href={{
          pathname: '/courses/[id]',
          params: { id: 2, title: 'React Native' }
        }}>
        跳转传参（Link 使用 params）
      </Link>

      <TouchableOpacity onPress={() => router.navigate('/courses/3?title=Vue.js')}>
        <Text style={styles.buttonText}>
          跳转传参（navigate ）
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.navigate({
        pathname: '/courses/[id]',
        params: { id: 4, title: '微信小程序' }
      })}>
        <Text style={styles.buttonText}>
          跳转传参（navigate 使用 params ）
        </Text>
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
    color: '#e29447',
  },
  link: {
    marginTop: 20,
    fontSize: 25,
    color: '#1f99b0',
  },
  buttonText: {
    marginTop: 20,
    fontSize: 25,
    color: '#ff7f6f',
  },
});
