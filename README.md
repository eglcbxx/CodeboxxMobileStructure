# Expo App Structure Guide

## Table of Contents

### 🚀 Getting Started

- [Setting up](#setting-up)

### 🧭 App Concepts & Navigation

- [Understanding the app Folder](#understanding-the-app-folder)
- [Folders: What do they mean?](#folders-what-do-they-mean)
- [What is a Stack?](#what-is-a-stack)
- [What is a Tab?](#what-is-a-tab)
- [What is a Stack.Screen?](#what-is-a-stackscreen)
- [What is a Tabs.Screen?](#what-is-a-tabsscreen)

### 🗂️ File & Folder Reference

- [File & Folder Structure](#file--folder-structure)
- [Visual Diagram: How Screens Connect](#visual-diagram-how-screens-connect)
- [app/index.tsx (Entry Point)](#appindextsx-entry-point)
- [app/_layout.tsx (App Layout)](#app_layouttsx-app-layout)
- [app/(tabs)/_layout.tsx (Tab Layout)](#apptabs_layouttsx-tab-layout)
- [app/(tabs)/index.tsx (Tab Redirect)](#apptabsindextsx-tab-redirect)
- [app/(tabs)/tab1/index.tsx (Tab 1 Screen)](#apptabstab1indextsx-tab-1-screen)
- [app/(tabs)/tab2/_layout.tsx (Tab 2 Stack Layout)](#apptabstab2_layouttsx-tab-2-stack-layout)
- [app/(tabs)/tab2/index.tsx (Tab 2 Main Screen)](#apptabstab2indextsx-tab-2-main-screen)
- [app/(tabs)/tab2/second.tsx (Tab 2 Second Screen)](#apptabstab2secondtsx-tab-2-second-screen)

### 🛠️ Build Your Own

- [Step-by-Step Example: Create Entry Point and Tabs with Layout](#step-by-step-example-create-entry-point-and-tabs-with-layout)
- [What Next?](#what-next)

---

## 🚀 Getting Started

#### Setting up

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

3. Open the app
   - Use your phone with the Expo Go app, or
   - Use an Android/iOS simulator, or
   - Open in your web browser

4. Explore the app
   - Click through the screens and tabs to see how navigation works.

[⬆️](#table-of-contents)

---

## 🧭 App Concepts & Navigation

### Understanding the app Folder

The `app` folder is where all the screens and navigation for your app live. Think of it as the "pages" of your app.

### Main Concepts

- **Screen**: What you see on your phone at any moment (like a page in a book).
- **Stack**: Lets you move forward and back between screens, like a stack of cards.
- **Tab**: Like a pack of stacks—each tab can have its own stack of screens, and you can switch between these packs using the tab bar.

[⬆️](#table-of-contents)

---

### Folders: What do they mean?

- **(tabs)**: This folder holds everything related to the tab navigation (the bar at the bottom).
- **tab1**: This folder is for the first tab's screens.
- **tab2**: This folder is for the second tab's screens (and can have more than one screen).

[⬆️](#table-of-contents)

---

### What is a Stack?

- A **Stack** is like a stack of cards: you can go forward to a new screen (push a card) or back (pop a card).
- Used for navigation where you want to go "deeper" and then return.
- In code, this is set up in `_layout.tsx` files using `<Stack.Screen ... />`.

[⬆️](#table-of-contents)

---

### What is a Tab?

- A **Tab** is like a pack of stacks: each tab can hold its own stack of screens, and you can switch between these packs using the tab bar.
- Each tab is a main area, and you can go back and forth without losing your place.
- In code, this is set up in `(tabs)/_layout.tsx` using `<Tabs.Screen ... />`.

[⬆️](#table-of-contents)

---

### What is a Stack.Screen?

- This is a line of code that tells the app, "This is a screen you can go to in the stack."
- Example: `<Stack.Screen name="index" />` means you can go to the `index.tsx` screen in this stack.

[⬆️](#table-of-contents)

---

### What is a Tabs.Screen?

- This is a line of code that tells the app, "This is a tab in the tab bar."
- Example: `<Tabs.Screen name="tab1" />` means the first tab shows the screen in `tab1/index.tsx`.

[⬆️](#table-of-contents)

---

## 🗂️ File & Folder Reference

### File & Folder Structure

```text
app/                  # Folder where all the screens and navigation for your app live.
  _layout.tsx         # Main layout for the app (handles navigation)
  index.tsx           # The first screen you see (entry point)
  not-found.tsx       # Shown if you go to a screen that doesn't exist
  (tabs)/             # Folder for the main tab navigation
    _layout.tsx       # Layout for the tabs (tab bar at the bottom)
    index.tsx         # Redirects to the first tab
    tab1/             # Folder for the first tab
      index.tsx       # Screen for Tab 1
    tab2/             # Folder for the second tab
      _layout.tsx     # Stack layout for Tab 2 (lets you go deeper)
      index.tsx       # Main screen for Tab 2
      second.tsx      # Second screen in Tab 2
```

[⬆️](#table-of-contents)

---

### Visual Diagram: How Screens Connect

```text
[ Entry Point ]
    |
    v
[ Tabs Layout ] <--- Tab Bar (switches between tabs)
   |         |
   v         v
[Tab 1]   [Tab 2 Stack]
             |
             v
        [Tab 2 Second Screen]
```

- The app starts at the Entry Point (index.tsx)
- You go to the Tabs Layout (tab bar at the bottom)
- You can switch between Tab 1 and Tab 2
- Tab 2 has its own stack: you can go deeper to a second screen and back

[⬆️](#table-of-contents)

---

### app/index.tsx (Entry Point)

- This is the first screen you see when you open the app.
- It welcomes you and has a button to go to the main part of the app (the tabs).
- File: `app/index.tsx`

[⬆️](#table-of-contents)

---

### app/_layout.tsx (App Layout)

- This file controls how you move between screens.
- It uses something called a **Stack** (like a stack of cards) so you can go forward and back between screens.
- It tells the app to show the entry screen first, then the tabs, and a "not found" screen if needed.
- File: `app/_layout.tsx`

[⬆️](#table-of-contents)

---

### app/(tabs)/_layout.tsx (Tab Layout)

- This file sets up the tab bar at the bottom of the app.
- It tells the app which screens are tabs and what icons/titles to show.
- Each tab is linked to a folder (like `tab1` or `tab2`).
- File: `app/(tabs)/_layout.tsx`

[⬆️](#table-of-contents)

---

### app/(tabs)/index.tsx (Tab Redirect)

- This file automatically sends you to the first tab when you open the tabs section.
- You usually don't see this screen; it's just for navigation.
- File: `app/(tabs)/index.tsx`

[⬆️](#table-of-contents)

---

### app/(tabs)/tab1/index.tsx (Tab 1 Screen)

- This is the main screen for the first tab.
- When you tap the first tab, you see this screen.
- File: `app/(tabs)/tab1/index.tsx`

[⬆️](#table-of-contents)

---

### app/(tabs)/tab2/_layout.tsx (Tab 2 Stack Layout)

- This file lets you have more than one screen in Tab 2.
- It uses a **Stack** so you can go from the main Tab 2 screen to a second screen and back.
- File: `app/(tabs)/tab2/_layout.tsx`

[⬆️](#table-of-contents)

---

### app/(tabs)/tab2/index.tsx (Tab 2 Main Screen)

- This is the first screen you see when you tap the second tab.
- It has a button to go to another screen (second.tsx) in the same tab.
- File: `app/(tabs)/tab2/index.tsx`

[⬆️](#table-of-contents)

---

### app/(tabs)/tab2/second.tsx (Tab 2 Second Screen)

- This is the second screen in Tab 2.
- You get here by pressing a button on the main Tab 2 screen.
- You can go back to the main Tab 2 screen using the back arrow.
- File: `app/(tabs)/tab2/second.tsx`

[⬆️](#table-of-contents)

---

## 🛠️ Build Your Own

### Step-by-Step Example: Create Entry Point and Tabs with Layout

### 1. Create the Entry Point (`app/index.tsx`)

This is the first screen users see. It welcomes them and lets them go to the main tabs.

```tsx
import { useRouter } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome!</Text>
      <Text style={styles.paragraph}>This is the entry point of the app.</Text>
      <Text style={styles.button} onPress={() => router.push({ pathname: "/(tabs)/tab1" })}>
        Go to Tabs
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  paragraph: { fontSize: 16, marginBottom: 24 },
  button: {
    backgroundColor: '#bfa100',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#7a5c00',
    textAlign: 'center',
    shadowColor: '#7a5c00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
});
```

[⬆️](#table-of-contents)

---

### 2. Create the Folders for Tabs

Inside your `app` folder, create a folder named `(tabs)`. Inside `(tabs)`, create two folders: `tab1` and `tab2`.

Your structure should look like this:

```
app/
  (tabs)/
    tab1/
    tab2/
```

[⬆️](#table-of-contents)

---

### 3. Create the Main Layout (`app/_layout.tsx`)

This file controls how you move between screens. It uses a Stack to let you go forward and back.

```tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
```

[⬆️](#table-of-contents)

---

### 4. Create the Tabs Layout (`app/(tabs)/_layout.tsx`)

This file sets up the tab bar at the bottom and tells the app which screens are tabs.

```tsx
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'tab1') {
            return <Ionicons name="home" size={size} color={color} />;
          }
          if (route.name === 'tab2') {
            return <Ionicons name="settings" size={size} color={color} />;
          }
          return null;
        },
      })}
    >
      <Tabs.Screen name="tab1" />
      <Tabs.Screen name="tab2" />
    </Tabs>
  );
}
```

[⬆️](#table-of-contents)

---

### 5. Create Tab Screens

- `app/(tabs)/tab1/index.tsx` for Tab 1
- `app/(tabs)/tab2/index.tsx` for Tab 2

Each file is a screen. For example:

```tsx
// app/(tabs)/tab1/index.tsx
import { Text, View } from 'react-native';
export default function Tab1Screen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab 1 Screen</Text>
    </View>
  );
}
```

```tsx
// app/(tabs)/tab2/index.tsx
import { Text, View } from 'react-native';
export default function Tab2Screen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab 2 Screen</Text>
    </View>
  );
}
```

[⬆️](#table-of-contents)

---

## What Next?

- Try changing the text in any screen and see it update in the app.
- Add a new file in the `app/(tabs)/tab2/` folder to create a new screen in Tab 2's stack.
- Explore the rest of this README for more explanations!

[⬆️](#table-of-contents)

---
