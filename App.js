import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { homeStyles } from "./styles/HomeStyle";

export default function App() {
  return (
    <View style={homeStyles.container}>
      {/* <ImageBackground
        resizeMode="cover"
        source={require("./assets/expo.png")}
        style={homeStyles.image}
      > */}
      <View>
        <Text style={homeStyles.title}>Bienvenido</Text>
      </View>
      <Text>Hola mundo2</Text>
      {/* <Image source={{uri:}}  /> */}
      <Image
        source={require("./assets/expo.png")}
        style={homeStyles.image}
        resizeMode="contain"
      />
      <Button
        title="Aceptar"
        color="red"
        onPress={() => Alert.alert("Hola", "Ocurrio un error")}
      />
      <TouchableOpacity
        style={homeStyles.bton}
        onPress={() => Alert.alert("Hola", "Presionas un boton personalizado")}
      >
        <Text style={homeStyles.textButton}>Boton Personalizado</Text>
      </TouchableOpacity>
      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({});
