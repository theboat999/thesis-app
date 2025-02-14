import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const NotificationItem = ({ title, message, timestamp }) => {
  return (
    <View style={styles.notificationItem}>
      <View style={styles.notificationHeader}>
        <Text style={styles.notificationTitle}>{title}</Text>
        <Text style={styles.notificationTimestamp}>{timestamp}</Text>
      </View>
      <Text style={styles.notificationMessage}>{message}</Text>
    </View>
  );
};

const NotificationCenter = () => {
  const notifications = [
    { title: "Humidity Alert", message: "Humidity low, needs adjustments", timestamp: "5 minutes ago" },
    { title: "pH Level Status", message: "pH level stable", timestamp: "1 hour ago" },
    { title: "Temperature Update", message: "Temperature within range", timestamp: "2 hours ago" },
    { title: "Humidity Alert", message: "Humidity low, needs adjustments", timestamp: "3 hours ago" },
    { title: "pH Level Status", message: "pH level stable", timestamp: "12 hours ago" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>POMOD-AERO</Text>
        <Text style={styles.subtitle}>Calendar</Text>
      </View>

      {/* Notification Section */}
      <View style={styles.notificationCard}>
        {notifications.map((notif, index) => (
          <NotificationItem
            key={index}
            title={notif.title}
            message={notif.message}
            timestamp={notif.timestamp}
          />
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
  notificationCard: {
    backgroundColor: "#FFFFFD",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  notificationItem: {
    backgroundColor: "#F9F9F9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#445D48",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  notificationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  notificationTimestamp: {
    fontSize: 12,
    color: "#777",
  },
  notificationMessage: {
    fontSize: 14,
    color: "#555",
  },
});

export default NotificationCenter;
