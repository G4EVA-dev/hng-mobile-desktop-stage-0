import React, { useEffect, useRef } from "react";
import {
  Animated,
  TouchableOpacity,
  Text,
  Linking,
  View,
  StyleSheet,
} from "react-native";

// Define props type for CustomButton
type ButtonProps = {
  title: string;
  url: string;
};

const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity: 0

  // Fade-in animation
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // 1 second fade-in
      useNativeDriver: true,
    }).start();
  }, []);

  // Reusable Button Component with TypeScript Types
  const CustomButton: React.FC<ButtonProps> = ({ title, url }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => Linking.openURL(url)}
      activeOpacity={0.8} // Smooth press effect
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.heading}>Welcome to My HNG Task 0</Text>
      <CustomButton
        title="Visit GitHub Repository"
        url="https://github.com/G4EVA-dev/hng-mobile-desktop-stage-0"
      />
      <CustomButton title="HNG Hire Page" url="https://hng.tech/hire" />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  button: {
    backgroundColor: "#6200ee", // Purple color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: "70%",
    alignItems: "center",
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  heading: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20, // Added better spacing
  },
});

export default App;
