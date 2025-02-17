import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importing Ionicons for the button icon

const { width } = Dimensions.get("window");

// Sample images with corrected paths
const sampleImages = {
  "2025-02-18": [
    require("../../assets/images/feb18_1.jpg"),
    require("../../assets/images/feb18_2.jpg"),
    require("../../assets/images/feb18_3.jpg"),
  ],
  "2025-02-17": [
    require("../../assets/images/feb17_1.jpg"),
    require("../../assets/images/feb17_2.jpg"),
    require("../../assets/images/feb17_3.jpg"),
  ],
  "2025-02-16": [
    require("../../assets/images/feb16_1.jpg"),
    require("../../assets/images/feb16_2.jpg"),
    require("../../assets/images/feb16_3.jpg"),
  ],
};

const GalleryScreen = () => {
  const handleSnapshot = () => {
    console.log("Snapshot taken!");
    // Add functionality for taking a snapshot here
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>POMODAERO 🌱</Text>
        <Text style={styles.subtitle}>Gallery</Text>
      </View>

      {/* Snapshot Button under Header */}
      <TouchableOpacity onPress={handleSnapshot} style={styles.snapshotButton}>
        <Ionicons name="camera" size={24} color="white" />
        <Text style={styles.snapshotText}>Took a snapshot</Text>
      </TouchableOpacity>

      {/* Gallery Section */}
      <View style={styles.galleryContainer}>
        {Object.keys(sampleImages).map((date) => (
          <View key={date} style={styles.section}>
            {/* Date Badge */}
            <View style={styles.dateBadge}>
              <Text style={styles.dateText}>{date}</Text>
            </View>

            {/* Image Grid */}
            <View style={styles.imageRow}>
              {sampleImages[date].map((image, index) => (
                <View key={index} style={styles.imageCard}>
                  <Image source={image} style={styles.image} />
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA", // Light modern background
  },
  header: {
    backgroundColor: "#445D48",
    padding: 30,
  },
  title: {
    marginTop: 50,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#EDEDED",
    fontSize: 14,
  },
  snapshotButton: {
    backgroundColor: "#445D48", // Green button
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    alignSelf: "flex-end", // Center the button horizontally
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginRight: 10,
    elevation: 4, // For Android shadow
  },
  snapshotText: {
    color: "white",
    fontSize: 12,
    marginLeft: 6,
  },
  galleryContainer: {
    paddingHorizontal: width * 0.05,
    marginTop: 20,
  },
  section: {
    marginBottom: 40,
  },
  dateBadge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(68, 93, 72, 0.8)", // Glassmorphism effect
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4, // For Android shadow
  },
  dateText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 14,
  },
  imageRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageCard: {
    width: (width - 50) / 3, // Fits 3 images per row
    marginBottom: 15,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#FFF", // White card effect
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // For Android
  },
  image: {
    width: "100%",
    height: 130,
    borderRadius: 15,
  },
});

export default GalleryScreen;
