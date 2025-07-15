import { Link, Stack } from 'expo-router';
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

/**
 * 导航栏 Logo 组件
 */
function LogoTitle() {
  return <Image style={style.logo} contentFit="contain" source={require('../assets/logo-light.png')}/>
}

/**
 * 导航栏按钮组件
 * @param props
 */
function HeaderButton({ href, ...rest }) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity>
        <SimpleLineIcons size={20} color="#1f99b0" {...rest} />
      </TouchableOpacity>
    </Link>
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
      <Stack.Screen
        name="index"
        options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerLeft: () => <HeaderButton name="bell" href="/articles" style={style.headerLeft} />,
          headerRight: () => (
            <>
              <HeaderButton name="magnifier" href="/search" style={style.headerRight} />
              <HeaderButton name="options" href="/settings" style={style.headerRight} />
            </>
          ),
        }}
      />
      <Stack.Screen
        name="courses/[id]"
        options={({ route }) => ({
          title: route.params?.title || '课程页', // 使用 params 中的 title，如果没有则显示默认值
        })}
      />
    </Stack>
  );
}

const style = StyleSheet.create({
  logo: {
    width: 130,
    height: 30,
  },
  headerLeft: {
    marginLeft: 15,
  },
  headerRight: {
    marginRight: 15,
  },
});
