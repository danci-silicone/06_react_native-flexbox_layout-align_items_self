import { View } from "react-native";

const AlignSelf = () => {
  return (
    // Try playing with the red square alignSelf with 'auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'
    <View
      style={[
        { flexDirection: "column", alignItems: "flex-start" },
        styles.elementsContainer,
      ]}
    >
      <View style={[{ alignSelf: "flex-end" }, styles.red]} />
      <View style={styles.yellow} />
      <View style={styles.green} />
    </View>
  );
};

const green = "#32B76C";
const yellow = "#FAA030";
const red = "#EE2C38";

const styles = {
  green: {
    backgroundColor: green,
    height: 50,
    width: 60,
  },
  yellow: {
    backgroundColor: yellow,
    height: 50,
    width: 100,
  },
  red: {
    backgroundColor: red,
    height: 50,
    width: 80,
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
};

export default AlignSelf;
