import { Link, Tabs } from "expo-router";
import { Image } from "expo-image";
import { SimpleLineIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

/**
 * 导航栏 Logo 组件
 */
function LogoTitle() {
  return (
    <Image
      style={style.logo}
      contentFit="contain"
      source={require("../../assets/logo-light.png")}
    />
  );
}

/**
 * TabBar 图标组件
 * @param props
 */
function TabBarIcon(props) {
  return <SimpleLineIcons size={25} {...props} />;
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
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center", // 安卓标题栏居中
        headerTitle: (props) => <LogoTitle {...props} />,
        headerLeft: () => (
          <HeaderButton name="bell" href="/articles" style={style.headerLeft} />
        ),
        headerRight: () => (
          <>
            <HeaderButton
              name="magnifier"
              href="/search"
              style={style.headerRight}
            />
            <HeaderButton
              name="options"
              href="/settings"
              style={style.headerRight}
            />
          </>
        ),
        tabBarActiveTintColor: "#1f99b0", // 设置 TabBar 选中项的颜色
        tabBarStyle: {
          height: 80, // 设置 TabBar 的高度
        },
        tabBarLabelStyle: {
          marginTop: 4, // 设置 TabBar 文字与图标之间的间距
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "发现",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="compass" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="videos"
        options={{
          title: "视频课程",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="camrecorder" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: "我的",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
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
