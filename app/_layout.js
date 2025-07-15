import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',     // 安卓标题栏居中
        animation: 'slide_from_right',  // 安卓使用左右切屏
        headerStyle: {                  // 导航栏整体样式
          backgroundColor: '#e29447'
        },
        headerTintColor: '#fff',        // 导航栏中文字、按钮、图标的颜色
        headerTitleStyle: {             // 导航栏标题样式
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: '首页' }} />
      <Stack.Screen
        name="courses/[id]"
        options={({ route }) => ({
          title: route.params?.title || '课程页', // 使用 params 中的 title，如果没有则显示默认值
        })}
      />
    </Stack>
  );
}
