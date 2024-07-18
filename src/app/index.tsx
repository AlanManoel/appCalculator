import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import styles from './style'
import { Entypo, AntDesign, Feather } from '@expo/vector-icons';
import { useState } from 'react';

export default function Index() {
  const [blackTheme, setTheme] = useState(false);
  const { bodyBlack, bodyWhite } = { bodyBlack: "#2C3137", bodyWhite: "#D3D3D3" };

  const buttonsCalculator = ["CE",
    <Feather name="delete" size={32} color="#F2724A" />,
    "%", "/", 7, 8, 9, "x", 4, 5,
    6, "-", 1, 2, 3, "+", 0, ",", "="
  ];

  return (
    <View style={[styles.container, { backgroundColor: blackTheme ? bodyWhite : bodyBlack }]}>

      {/* HEADER */}
      <View style={styles.hearder}>

        <AntDesign name="calculator" size={28} color={blackTheme ? bodyBlack : bodyWhite} />
        <Text style={[styles.text, { color: blackTheme ? bodyBlack : bodyWhite }]}>Calculadora</Text>
        <TouchableOpacity>
          <Entypo name={blackTheme ? 'moon' : 'light-up'} size={28} color={blackTheme ? bodyBlack : bodyWhite} onPress={
            () => blackTheme ? setTheme(false) : setTheme(true)
          } />
        </TouchableOpacity>
      </View>

      <View>
        {/* VIEW CALCULO */}
        <View>
          <Text style={[styles.textResult, {
            color: blackTheme ? bodyBlack : bodyWhite
          }]}>
            2+4+5
          </Text>
        </View>

        {/* VIEW BUTTONS */}
        <View style={styles.conteinerButtons}>
          {buttonsCalculator.map((button) => (
            button === "=" ? (
              <TouchableOpacity
                key={button + "key"}
                style={[styles.button, { backgroundColor: "#F2724A" }]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color: isNaN(Number(button)) ? "#D3D3D3" : (blackTheme ? bodyBlack : bodyWhite)
                    }
                  ]}
                >
                  {button}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                key={button + "key"}
                style={[
                  styles.button,
                  {
                    backgroundColor: blackTheme ? "#EAEBEF" : "#6B6972",
                    width: button === 0 ? 180 : 84
                  }
                ]}
              >
                <Text
                  style={[
                    styles.buttonText,
                    {
                      color: isNaN(Number(button)) ? "#F2724A" : (blackTheme ? bodyBlack : bodyWhite)
                    }
                  ]}
                >
                  {button}
                </Text>
              </TouchableOpacity>
            )
          ))}
        </View>
      </View>

    </View>
  );
}
