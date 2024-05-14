import { StyleSheet, View } from "react-native";
import { StorybookUIRoot } from ".././.ondevice";
export default function Page() {
  return (
    <View style={styles.container}>
      <StorybookUIRoot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
