import { StyleSheet, useColorScheme } from "react-native";
import { ThemedView } from "./ThemedView";

export function Divider() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <ThemedView
      style={{
        ...styles.divider,
        borderBlockColor: isDarkMode ? "#ffffff" : "#000000",
      }}
    />
  );
}

const styles = StyleSheet.create({
  divider: {
    borderBlockColor: "#ffffff",
    borderWidth: 0.5,
    opacity: 0.5,
    marginVertical: 16,
  },
});
