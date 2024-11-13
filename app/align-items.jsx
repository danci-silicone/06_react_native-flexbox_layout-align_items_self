import { View } from "react-native";

const AlignItems = () => {
  return (
    // Try setting `alignItems` to 'flex-start', 'flex-end', 'center', 'stretch'
    <View
      style={[
        { flexDirection: "column", alignItems: "stretch" },
        styles.elementsContainer,
      ]}
    >
      <View style={styles.red} />
      <View style={styles.yellow} />
      <View style={styles.green} />
    </View>
  );
};

const green = "#32B76C";
const yellow = "#FAA030";
const red = "#EE2C38";

// Ako je svojstvo alignItems = 'stretch'
// varijabla width treba biti 'auto'

const width = "auto";

const styles = {
  green: {
    backgroundColor: green,
    height: 50,
    width: width,
  },
  yellow: {
    backgroundColor: yellow,
    height: 50,
    width: width,
  },
  red: {
    backgroundColor: red,
    height: 50,
    width: width,
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
};

export default AlignItems;
