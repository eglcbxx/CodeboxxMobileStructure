// Tab 2 second screen
import { StyleSheet, Text, View } from 'react-native';

export default function Tab2Screen2() {
  return (
    <View style={[styles.container, { backgroundColor: '#a8f5e1' }]}> 
      <Text style={styles.header}>Tab 2 Second Screen</Text>
      <View style={styles.divider} />
      <Text style={styles.sectionTitle}>File Location</Text>
      <Text style={styles.code}>app/(tabs)/tab2/second.tsx</Text>
      <View style={styles.divider} />
      <Text style={styles.paragraph}>
        This is the <Text style={styles.bold}>second screen in the stack for Tab 2</Text>. You see this screen after pressing the button on the main Tab 2 screen.
      </Text>
      <Text style={styles.paragraph}>
        This file is inside the <Text style={styles.code}> (tabs)/tab2 </Text> folder. This demonstrates how you can have multiple screens in a single tab using a stack navigator.
      </Text>
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
    backgroundColor: '#22b18c',
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
    backgroundColor: '#22b18c',
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
});
