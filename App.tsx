import * as React from "react";
import { Pressable, StyleSheet, Button, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the home screen</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => alert("haha")}
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        >
          <Text>Like</Text>
        </Pressable>
        <Pressable
          onPress={() => alert("haha")}
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        >
          <Text>I'm pressable!</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 24, marginBottom: 20 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    color: "white",
    backgroundColor: "green",
    borderWidth: 2,
    borderColor: "yellow",
    borderRadius: 10,
    padding: 15,
    margin: 12,
  },
  pressed: {
    opacity: 0.5,
  },
});

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Heart!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Favourite") {
              iconName = focused ? "heart" : "heart-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favourite" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
