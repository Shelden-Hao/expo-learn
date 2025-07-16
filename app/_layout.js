import { Link, Stack } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// 模态页关闭按钮
function CloseButton() {
  return (
    <View style={{ width: 30 }}>
      <Link href="../" asChild>
        <TouchableOpacity>
          <MaterialCommunityIcons name="close" size={30} color="#1f99b0" />
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        title: '',                      // 默认标题为空
        headerTitleAlign: 'center',     // 安卓标题栏居中
        animation: 'slide_from_right',  // 安卓使用左右切屏
        headerTintColor: '#1f99b0',     // 导航栏中文字、按钮、图标的颜色
        headerTitleStyle: {             // 标题组件的样式
          fontWeight: '400',
          color: '#2A2929',
          fontSize: 16,
        },
        headerBackButtonDisplayMode: 'minimal', // 设置返回按钮只显示箭头，不显示文字
      }}
    >
      {/* Tabs */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Cards */}
      <Stack.Screen name="articles/index" options={{ title: '通知' }} />
      <Stack.Screen name="settings/index" options={{ title: '设置' }} />
      <Stack.Screen name="courses/[id]" options={{ title: '课程详情' }} />
      <Stack.Screen name="search/index" options={{ title: '搜索' }} />

       {/* Modal */}
       <Stack.Screen
        name="teachers/[id]"
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom', // 从底部滑入
          title: '老师详情',
          headerLeft: () => <CloseButton />,
        }}
      />
    </Stack>
  );
}
