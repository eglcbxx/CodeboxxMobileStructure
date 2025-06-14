import { Ionicons } from '@expo/vector-icons';
import { Stack, useNavigation } from 'expo-router';
import { Platform, Text, TouchableOpacity, View } from 'react-native';

function getHeaderBackgroundColor(routeName: string) {
  if (routeName === "index") return "#d0d0d0";
  if (routeName === "second") return "#d0d0d0";
  return undefined;
}

function CustomHeader({ title }: { title: string }) {
  const navigation = useNavigation();
  // @ts-ignore: navigation.canGoBack exists at runtime
  const canGoBack = navigation.canGoBack && navigation.canGoBack();
  return (
    <View
      style={{
        height: 48,
        backgroundColor: '#d0d0d0',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
      }}
    >
      {canGoBack && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingHorizontal: 16, paddingVertical: 8 }}
        >
          <Ionicons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
      )}
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
      </View>
      {/* Spacer to keep title centered */}
      {canGoBack && <View style={{ width: 40 }} />}
    </View>
  );
}

export default function Tab2Stack() {
  return (
    <Stack
      screenOptions={({ route }) => {
        const screenOptions: any = {
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
    >
      <Stack.Screen name="index" options={{title:"/index"}} />
      <Stack.Screen name="second" options={{title:"/second"}} />
    </Stack>
  );
}
