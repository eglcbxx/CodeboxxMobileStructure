// Tab 2 first screen
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Tab2Screen1() {
  const router = useRouter();
  return (
    <View style={[styles.container, { backgroundColor: '#a3ff92' }]}> 
      <Text style={styles.header}>Tab 2 Main Screen</Text>
      <View style={styles.divider} />
      <Text style={styles.sectionTitle}>File Location</Text>
      <Text style={styles.code}>app/(tabs)/tab2/index.tsx</Text>
      <View style={styles.divider} />
      <Text style={styles.paragraph}>
        This is the <Text style={styles.bold}>main screen for the second tab</Text>. It is shown when you select the second tab in the tab bar below.
      </Text>
      <Text style={styles.paragraph}>
        This file is inside the <Text style={styles.code}> (tabs)/tab2 </Text> folder. You can use this screen to display content for the second tab.
      </Text>
      <View style={styles.divider} />
      <Text style={styles.paragraph}>
        Press the button below to navigate to the second screen in this tab&apos;s stack.
      </Text>
      <View style={styles.buttonWrapper}>
        <Text style={styles.button} onPress={() => router.push('/(tabs)/tab2/second')}>
          Go to Second Screen
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  info: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#329c1f',
    padding: 4,
    borderRadius: 4,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#329c1f',
    marginVertical: 16,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 15,
    marginBottom: 12,
    textAlign: 'center',
    color: '#000',
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
  buttonWrapper: {
    marginTop: 8,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#329c1f',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
});
