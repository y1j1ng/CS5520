import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PressableButton({
  customStyle,
  onPressFunction,
  children,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.defaultStyle,
        customStyle,
        pressed && styles.press,
      ]}
      onPress={onPressFunction}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: "#aaa",
  },
  press: {
    backgroundColor: "white",
  },
});
