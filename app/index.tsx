import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={[styles.container, { backgroundColor: "#43b4f0" }]}>
      <Text style={styles.header}>🏠 Entry Point</Text>
      <View style={styles.divider} />
      <Text style={styles.sectionTitle}>File Location</Text>
      <Text style={styles.code}>app/index.tsx</Text>
      <View style={styles.divider} />
      <Text style={styles.paragraph}>
        This is the{" "}
        <Text style={styles.bold}>main entry screen</Text> of the app. When you
        open the app, this is the first screen you see.
      </Text>
      <Text style={styles.paragraph}>
        Press the button below to navigate to the main Tabs section.
      </Text>
      <View style={styles.buttonWrapper}>
        <Text
          style={styles.button}
          onPress={() => router.push({ pathname: "/(tabs)/tab1" })}
        >
          Go to Tabs
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#000000",
  },
  info: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: "center",
  },
  code: {
    fontFamily: "monospace",
    backgroundColor: "#205c90",
    color: "#fff",
    padding: 4,
    borderRadius: 4,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "#205c90",
    marginVertical: 16,
    alignSelf: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#000",
    textAlign: "center",
  },
  paragraph: {
    fontSize: 15,
    marginBottom: 12,
    textAlign: "center",
    color: "#000",
  },
  bold: {
    fontWeight: "bold",
    color: "#000",
  },
  buttonWrapper: {
    marginTop: 8,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#205c90",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#000",
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
});
