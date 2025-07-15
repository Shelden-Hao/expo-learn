import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center", // 安卓标题栏居中
        animation: "slide_from_right", // 安卓使用左右切屏
      }}
    />
  );
}
