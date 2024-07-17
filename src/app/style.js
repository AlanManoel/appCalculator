import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window'); // Obtém as dimensões da tela

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: "#2C3137",
        width: width, // Largura da tela
        height: height, // Altura da tela
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: "#FFF",
        fontSize: 24,
        marginTop: 10
    },
    rowButton: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8
    },
    containerButtons: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 8,
        marginBottom: 20
    }
});


export default styles;
