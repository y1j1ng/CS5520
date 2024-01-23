import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { useState } from "react";

export default function Input() {
  const [text, setText] = useState("");

  // callback handler
  function changeTextHandler(changedText) {
    setText(changedText);
  }
  return (
    <View>
      <TextInput
        placeholder="Type something"
        style={styles.input}
        value={text}
        onChangeText={changeTextHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: "50%",
  },
});
