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
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import { homeStyles } from "./styles/HomeStyle";
import { data } from "./config/app";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = () => {
    Alert.alert("Hola", "Presionas un boton personalizado");
  };
  const renderItem = ({ item }) => {
    <View style={homeStyles.card}>
      <View style={homeStyles.cardConte}>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>;
  };
  return (
    // <View style={homeStyles.container}>
    //   <FlatList
    //     data={data}
    //     keyExtractor={(item) => item.id}
    //     renderItem={renderItem}
    //     contentContainerStyle={homeStyles.list}
    //   />
    // </View>
    <ScrollView>
      <View style={homeStyles.container}>
        {/* <StatusBar barStyle="light-content" backgroundColor="#000000" /> */}
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <Text>Escribe algo</Text>
        <TextInput
          placeholder="Hola"
          value={inputValue}
          onChangeText={(text) => {
            setInputValue(text);
          }}
        />
        <Text>{inputValue}</Text>
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
          onPress={handleChange}
          color="red"
          // onPress={() => Alert.alert("Hola", "Ocurrio un error")}
        />
        <TouchableOpacity
          style={homeStyles.bton}
          onPress={() =>
            Alert.alert("Hola", "Presionas un boton personalizado")
          }
        >
          <Text style={homeStyles.textButton}>Boton Personalizado</Text>
        </TouchableOpacity>
        <Text>
          Un texto es una composición de signos codificados en un sistema de
          escritura que forma una unidad de sentido. También es una composición
          de caracteres imprimibles generados por un algoritmo de cifrado que,
          aunque no tienen sentido para cualquier persona, sí puede ser
          descifrado por su destinatario original.
        </Text>
        <Text>
          Un texto es una composición de signos codificados en un sistema de
          escritura que forma una unidad de sentido. También es una composición
          de caracteres imprimibles generados por un algoritmo de cifrado que,
          aunque no tienen sentido para cualquier persona, sí puede ser
          descifrado por su destinatario original.
        </Text>
        <Text>
          Un texto es una composición de signos codificados en un sistema de
          escritura que forma una unidad de sentido. También es una composición
          de caracteres imprimibles generados por un algoritmo de cifrado que,
          aunque no tienen sentido para cualquier persona, sí puede ser
          descifrado por su destinatario original.
        </Text>
        <Text>
          Un texto es una composición de signos codificados en un sistema de
          escritura que forma una unidad de sentido. También es una composición
          de caracteres imprimibles generados por un algoritmo de cifrado que,
          aunque no tienen sentido para cualquier persona, sí puede ser
          descifrado por su destinatario original.
        </Text>
        {/* </ImageBackground> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
