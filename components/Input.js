import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";
import React from "react";
import { useState } from "react";

export default function Input({ inputHandler, modalVisible, dismissModal }) {
  const [text, setText] = useState("");

  // callback handler
  function changeTextHandler(changedText) {
    setText(changedText);
  }

  function confirmHandler() {
    inputHandler(text);
  }

  function cancelHandler() {
    dismissModal();
  }

  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
          }}
        />
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          placeholder="Type something"
          style={styles.input}
          value={text}
          onChangeText={changeTextHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonView}>
            <Button title="Cancel" onPress={cancelHandler} />
          </View>
          <View style={styles.buttonView}>
            <Button title="Confirm" onPress={confirmHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: "50%",
  },
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  buttonsContainer: { flexDirection: "row" },
  buttonView: { width: "30%", margin: 5 },
});
