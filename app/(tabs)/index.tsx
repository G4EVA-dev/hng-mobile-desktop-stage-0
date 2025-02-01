import React, { useEffect, useRef } from "react";
import {
  Animated,
  TouchableOpacity,
  Text,
  Linking,
  View,
  Image,
  StyleSheet,
} from "react-native";

// Import the logo from assets
import logo from "@/assets/images/hng.png"; // Adjust the path if necessary

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
      {/* Logo at the top-left */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

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
    backgroundColor: "#ffffff", // White background for a modern look
  },
  logoContainer: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  logo: {
    width: 100, // Adjust size as needed
    height: 100,
    resizeMode: "contain", // Ensures the logo scales well
  },
  button: {
    backgroundColor: "#00aeff", // Brand color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#ffffff", // White text
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  heading: {
    color: "#00aeff", // Brand color
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default App;
