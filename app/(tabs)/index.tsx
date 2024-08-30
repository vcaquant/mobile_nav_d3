import { StyleSheet, Image } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { NavigationOptionType, OptionNav } from "@/components/OptionNav";
import { Divider } from "@/components/Divider";

const navigationOptions: NavigationOptionType[] = [
  {
    icon: "person",
    title: "Personal Data",
  },
  {
    icon: "mail",
    title: "Messages",
  },
  {
    icon: "notifications",
    title: "Notifications",
  },
  {
    icon: "location",
    title: "Location",
  },
  {
    icon: "people",
    title: "Community",
  },
  {
    icon: "person",
    title: "Break",
    break: true,
  },
  {
    icon: "information-circle",
    title: "FAQs",
  },
  {
    icon: "settings",
    title: "Settings",
  },
];

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedView style={styles.shadowImage}>
          <Image
            source={require("@/assets/images/profile-img.webp")}
            style={styles.profileImage}
          />
        </ThemedView>
        <ThemedView style={styles.profileInfo}>
          <ThemedText style={styles.bold}>Victorien Caquant</ThemedText>
          <ThemedText>Front-end developer</ThemedText>
        </ThemedView>
      </ThemedView>
      <Divider />
      {navigationOptions.map((option, index) => {
        if (option.break) {
          return <Divider key={index} />;
        }
        return <OptionNav key={index} option={option} />;
      })}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
    paddingTop: 75,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
  },
  shadowImage: {
    width: 75,
    height: 75,
    borderRadius: 14,
    shadowColor: "#ffb900",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10.0,
    elevation: 24,
  },
  profileImage: { width: 75, height: 75, borderRadius: 14 },
  profileInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: -1,
  },
  bold: { fontWeight: "bold" },
});
