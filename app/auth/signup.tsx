import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// Get device screen width and height for responsiveness
const { width, height } = Dimensions.get("window");

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    if (email && password) {
      Alert.alert('Success', 'Account created!');
      router.replace('/(tabs)'); // Redirect to main app
    } else {
      Alert.alert('Error', 'Please enter email and password');
    }
  };

  return (
    <LinearGradient colors={['#2E7D32', '#1B5E20']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>POMODAERO 🌱</Text>
          <Text style={styles.subtitle}>Sign up to create an account</Text>

          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={24} color="#666" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={24} color="#666" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="#666" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up ✨</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/auth/signin')}>
            <Text style={styles.link}>Already have an account? <Text style={styles.linkBold}>Sign In 🔑</Text></Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: width * 0.05, // Padding to adjust for different screen sizes
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: height * 0.05, // Vertical padding based on screen height
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: height * 0.04, // Responsive padding based on screen height
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: width * 0.06, // Adjust font size relative to screen width
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: width * 0.04, // Adjusted subtitle font size
    color: "#666",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F5F5F5",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    fontSize: width * 0.04, // Relative font size for inputs
    marginLeft: 10,
    color: "#333",
  },
  icon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: "#2E7D32",
    width: "100%",
    paddingVertical: height * 0.02, // Button padding relative to screen height
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: width * 0.05, // Font size relative to screen width
    fontWeight: "bold",
    color: "#fff",
  },
  link: {
    marginTop: 15,
    fontSize: width * 0.035, // Font size for link text
    color: "#666",
  },
  linkBold: {
    color: "#2E7D32",
    fontWeight: "bold",
  },
});
