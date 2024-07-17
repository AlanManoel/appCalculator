import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Botoes from '../components/botoes/Botoes';
import styles from './style'

export default function Index() {
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.text}>Calculadora</Text>
      </View>
      <View style={styles.containerButtons}>
        <View style={styles.rowButton}>
          <Botoes numero={"CE"} colorText={"#F2724A"} />
          <Botoes numero={"Del"} colorText={"#F2724A"} />
          <Botoes numero={"%"} colorText={"#F2724A"} />
          <Botoes numero={"/"} colorText={"#F2724A"} />
        </View>
        <View style={styles.rowButton}>
          <Botoes numero={"7"} />
          <Botoes numero={"8"} />
          <Botoes numero={"9"} />
          <Botoes numero={"x"} colorText={"#F2724A"} />
        </View>
        <View style={styles.rowButton}>
          <Botoes numero={"6"} />
          <Botoes numero={"5"} />
          <Botoes numero={"4"} />
          <Botoes numero={"-"} colorText={"#F2724A"} />
        </View>
        <View style={styles.rowButton}>
          <Botoes numero={"3"} />
          <Botoes numero={"2"} />
          <Botoes numero={"1"} />
          <Botoes numero={"+"} colorText={"#F2724A"} />
        </View>
        <View style={styles.rowButton}>
          <Botoes numero={"0"} />
          <Botoes numero={","} />
          <Botoes numero={"="} cor={"#F2724A"} />
        </View>
      </View>

    </View>
  );
}
