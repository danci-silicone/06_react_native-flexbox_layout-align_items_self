import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      <Link href="/align-items">Align Items</Link>
      <Link href="/align-self">Align Self</Link>
    </View>
  );
}
