import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 20,
  },
  title: {
    fontWeight: "700",
    color: "blue",
    fontSize: 32,
  },
  list: {
    paddingHorizontal: 10,
  },
  image: {
    width: "80%",
    height: 300,
    marginVertical: 20,
  },
  bton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
  },
  textButton: {
    color: "white",
    fontSize: 18,
    fontStyle: "italic",
  },
  cardConte: {
    padding: 15,
  },
  card: {
    backgroundColor: "red",
  },
});
