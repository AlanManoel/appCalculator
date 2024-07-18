import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent:"space-between",
    },
    text: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: 'bold'
    },
    hearder: {
        marginTop: statusBarHeight + 24,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },conteinerButtons:{
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'center',
        gap: 12,
        marginBottom: 20,
    },
    button: {
        borderRadius: 20,
        width: 84,
        height: 72,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
    },
    textResult: {
        fontSize: 72,
        textAlign: "right",
        margin: 12
    }
});


export default styles;
