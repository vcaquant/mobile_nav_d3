import { StyleSheet } from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export type NavigationOptionType = {
  icon:
    | "person"
    | "mail"
    | "notifications"
    | "location"
    | "people"
    | "information-circle"
    | "settings";
  title: string;
  break?: boolean;
};

export function OptionNav(props: { option: NavigationOptionType }) {
  return (
    <ThemedView style={styles.optionContainer}>
      <ThemedView style={styles.optionIcon}>
        <TabBarIcon name={props.option.icon} color={"#333333"} size={22} />
      </ThemedView>
      <ThemedText style={styles.bold}>{props.option.title}</ThemedText>
      <TabBarIcon
        name={"chevron-forward"}
        color={"#808080"}
        size={24}
        style={styles.optionChevron}
      />
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  optionContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  optionIcon: {
    backgroundColor: "#ffd500",
    padding: 10,
    borderRadius: 10,
  },
  bold: { fontWeight: "bold" },
  optionChevron: { marginLeft: "auto" },
});
