import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const appName = "my first app";
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  function receiveInput(data) {
    console.log("recieve input ", data);
    setText(data);
    setIsModalVisible(false);
  }

  function dismissModal() {
    setIsModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <Header name={appName} version={2} />
        <Button title="Add a goal" onPress={() => setIsModalVisible(true)} />
        <Input inputHandler={receiveInput} modalVisible={isModalVisible} />
      </View>
      <View>{<Text>{text}</Text>}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bottomView: {
    flex: 4,
    backgroundColor: "lightpink",
  },
});
