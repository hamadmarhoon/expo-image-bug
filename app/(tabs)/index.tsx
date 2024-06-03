import {
  Image,
  StyleSheet,
  Platform,
  View,
  Pressable,
  Text,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable
        onPress={() =>
          DocumentPicker.getDocumentAsync({
            type: "video/*",
          })
        }>
        <Text>Pick document</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
