import React from "react";
import styles from './style'

import { View, Text, TouchableOpacity } from "react-native";
export default function Botoes({ numero, cor = "#464B53", colorText = "#FFF" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: cor, width: numero === "0" ? 176 : 84 }]}
    // onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: colorText }]}>{numero}</Text>
    </TouchableOpacity>
  );
};

