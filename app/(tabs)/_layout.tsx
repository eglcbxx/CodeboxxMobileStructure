import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, useRouter } from "expo-router";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function getHeaderBackgroundColor(routeName: string) {
  if (routeName === "index") return "#43b4f0";
  if (routeName === "tab1/index") return "#d0d0d0";
  if (routeName === "tab2") return "#d0d0d0";
  return undefined;
}

function CustomHeader({ title }: { title: string }) {
  return (
    <View
      style={{
        height: 48,
        backgroundColor: '#d0d0d0',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
    </View>
  );
}

export default function TabsLayout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={({ route }) => {
        const screenOptions: any = {
          tabBarIcon: ({ color, size }: { color: string; size: number }) => {
            if (route.name === 'tab1/index') {
              return <Ionicons name="home" size={size} color={color} />;
            }
            if (route.name === 'tab2/index' || route.name === 'tab2') {
              return <Ionicons name="settings" size={size} color={color} />;
            }
            return null;
          },
          tabBarStyle: styles.tabBar,
          headerStyle: {
            backgroundColor: getHeaderBackgroundColor(route.name),
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTitleAlign: 'center',
          headerBackButtonDisplayMode: "minimal",
        };
        if (Platform.OS === "android") {
          screenOptions.header = () => <CustomHeader title={`/${route.name}`} />;
        }
        return screenOptions;
      }}
      tabBar={({ state, descriptors, navigation }) => (
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => router.push({ pathname: "/(tabs)/tab1" })}
          >
            <TabBarIcon name="code" color={state.index === 0 ? '#43b4f0' : '#222'} />
            <Text style={{ color: state.index === 0 ? '#43b4f0' : '#222', fontSize: 12 }}>
              Tab 1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => router.push({ pathname: "/(tabs)/tab2" })}
          >
            <TabBarIcon name="code" color={state.index === 1 ? '#43b4f0' : '#222'} />
            <Text style={{ color: state.index === 1 ? '#43b4f0' : '#222', fontSize: 12 }}>
              Tab 2
            </Text>
          </TouchableOpacity>
        </View>
      )}
    >
      <Tabs.Screen name="tab1/index" options={{ href: '/(tabs)/tab1', title:"/tab1/index" }} />
      <Tabs.Screen name="tab2" options={{ href: '/(tabs)/tab2', title:"/tab2" }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    borderTopWidth: 1,
    borderColor: '#bbb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 16,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  infoButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f5a623',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  infoText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
