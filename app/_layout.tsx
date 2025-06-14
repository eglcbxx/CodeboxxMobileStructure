import { Stack } from "expo-router";

function getHeaderBackgroundColor(routeName: string) {
  if (routeName === "index") return "#d0d0d0";
  if (routeName === "(tabs)") return "#d0d0d0";
  return undefined;
}

export default function RootLayout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: getHeaderBackgroundColor(route.name),
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTitleAlign: 'center',
        headerBackButtonDisplayMode: "minimal",
      })}
    >
      <Stack.Screen name="index" options={{ headerShown: true, title:"app/index", headerShadowVisible: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: true, title:"app/(tabs)", headerShadowVisible: false }} />
    </Stack>
  );
}
