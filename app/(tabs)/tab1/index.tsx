// Tab 1 main screen
import { StyleSheet, Text, View } from 'react-native';

export default function Tab1Screen() {
  return (
    <View style={[styles.container, { backgroundColor: '#ffedb8' }]}> 
      <Text style={styles.header}>Tab 1 Screen</Text>
      <View style={styles.divider} />
      <Text style={styles.sectionTitle}>File Location</Text>
      <Text style={styles.code}>app/(tabs)/tab1/index.tsx</Text>
      <View style={styles.divider} />
      <Text style={styles.paragraph}>
        This is the <Text style={styles.bold}>first tab screen</Text> of the app. It is shown when you select the first tab in the tab bar below.
      </Text>
      <Text style={styles.paragraph}>
        This file is inside the <Text style={styles.code}> (tabs)/tab1 </Text> folder. You can use this screen to display content for the first tab.
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
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#dab548',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#dab548',
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
