import { useState } from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native";

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);

    // 模拟重新读取接口
    console.log("开始读取接口了");
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const onEndReached = () => {
    console.log('开始加载更多了');
  };
  
  const data = [
    { id: 1, title: "静夜思" },
    { id: 2, title: "望庐山瀑布" },
    { id: 3, title: "早发白帝城" },
    { id: 4, title: "黄鹤楼送孟浩然之广陵" },
    { id: 5, title: "将进酒" },
    { id: 6, title: "行路难·其一" },
    { id: 7, title: "蜀道难" },
    { id: 8, title: "月下独酌·其一" },
    { id: 9, title: "赠汪伦" },
    { id: 10, title: "梦游天姥吟留别" },
    { id: 11, title: "宣州谢朓楼饯别校书叔云" },
    { id: 12, title: "送友人" },
    { id: 13, title: "登金陵凤凰台" },
    { id: 14, title: "清平调·其一" },
    { id: 15, title: "秋浦歌·白发三千丈" },
    { id: 16, title: "渡荆门送别" },
    { id: 17, title: "夜宿山寺" },
    { id: 18, title: "独坐敬亭山" },
    { id: 19, title: "关山月" },
    { id: 20, title: "子夜吴歌·秋歌" },
    { id: 21, title: "下终南山过斛斯山人宿置酒" },
    { id: 22, title: "月下独酌·其二" },
    { id: 23, title: "塞下曲六首·其一" },
    { id: 24, title: "玉阶怨" },
    { id: 25, title: "春夜洛城闻笛" },
    { id: 26, title: "越中览古" },
    { id: 27, title: "山中问答" },
    { id: 28, title: "清平调·其一" },
    { id: 29, title: "清平调·其二" },
    { id: 30, title: "清平调·其三" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text style={styles.title}>{item.title}</Text>
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={styles.header}>《唐诗 李白》</Text>}
        ListFooterComponent={<Text style={styles.footer}>没有更多了...</Text>}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={"#1f99b0"}
          />
        }
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    textAlign: "center",
    fontSize: 50,
    lineHeight: 60,
    fontWeight: "bold",
  },
  footer: {
    textAlign: "center",
    fontSize: 30,
    lineHeight: 60,
    color: "#999",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    lineHeight: 60,
  },
});
