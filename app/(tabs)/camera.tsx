import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

// Corrected relative paths for images inside assets/images/
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
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>POMODAERO 🌱</Text>
        <Text style={styles.subtitle}>Gallery</Text>
      </View>

      {/* Gallery Section */}
      <View style={styles.galleryContainer}>
        {Object.keys(sampleImages).map((date) => (
          <View key={date} style={styles.section}>
            <Text style={styles.sectionTitle}>
              {date} ({sampleImages[date].length} Photos)
            </Text>
            <View style={styles.imageRow}>
              {sampleImages[date].map((image, index) => (
                <Image key={index} source={image} style={styles.image} />
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
    backgroundColor: "#FCFBF4",
  },
  header: {
    backgroundColor: "#445D48",
    padding: 30,
    alignItems: "center",
  },
  title: {
    marginTop: 50,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
    fontSize: 14,
  },
  galleryContainer: {
    paddingHorizontal: width * 0.05,
    marginTop: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  imageRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  image: {
    width: (width - 60) / 3, // Fits 3 images per row
    height: 100,
    borderRadius: 10,
  },
});

export default GalleryScreen;
