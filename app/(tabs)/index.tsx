import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Modal from "react-native-modal"; // Import the modal

const StatusIndicator = ({ status }) => {
  return (
    <View style={styles.statusContainer}>
      {/* Status Circles (horizontally aligned) */}
      <View style={styles.circleContainer}>
        {/* Bad (Red) */}
        <View
          style={[
            styles.statusCircle,
            { backgroundColor: "#E74C3C" },
            status === "Bad" && styles.activeStatus,
          ]}
        />
        {/* Okay (Orange) */}
        <View
          style={[
            styles.statusCircle,
            { backgroundColor: "#F39C12" },
            status === "Okay" && styles.activeStatus,
          ]}
        />
        {/* Great (Green) */}
        <View
          style={[
            styles.statusCircle,
            { backgroundColor: "#27AE60" },
            status === "Great" && styles.activeStatus,
          ]}
        />
      </View>
    </View>
  );
};

// Helper function to get color for the current status text
const getStatusColor = (status) => {
  if (status === "Bad") return "#E74C3C";
  if (status === "Okay") return "#F39C12";
  if (status === "Great") return "#27AE60";
  return "#000";
};

const Dashboard = () => {
  // Mapping data for each metric
  const metricData = {
    Temperature: {
      currentStatus: "Okay",
      chart: {
        labels: ["6:00", "9:00", "12:00", "15:00", "18:00"],
        data: [10, 5, 15, 20, 25],
        yAxisSuffix: "°C",
      },
    },
    pH: {
      currentStatus: "Great",
      chart: {
        labels: ["6:00", "9:00", "12:00", "15:00", "18:00"],
        data: [6.5, 6.7, 6.8, 6.6, 6.7],
        yAxisSuffix: "",
      },
    },
    Humidity: {
      currentStatus: "Bad",
      chart: {
        labels: ["6:00", "9:00", "12:00", "15:00", "18:00"],
        data: [30, 35, 40, 38, 36],
        yAxisSuffix: "%",
      },
    },
    EC: {
      currentStatus: "Okay",
      chart: {
        labels: ["6:00", "9:00", "12:00", "15:00", "18:00"],
        data: [150, 160, 155, 170, 165],
        yAxisSuffix: "µS/cm",
      },
    },
  };

  const [selectedMetric, setSelectedMetric] = useState("Temperature"); // Default metric
  const [isModalVisible, setModalVisible] = useState(false); // Modal visibility toggle

  // Get current metric details
  const currentMetricData = metricData[selectedMetric];

  // Function to toggle modal
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>POMODAERO 🌱</Text>
        <Text style={styles.subtitle}>Dashboard</Text>
      </View>

      {/* Status Card */}
      <View style={styles.card}>
        <Text style={styles.statusText}>
          CURRENT STATUS:{" "}
          <Text
            style={[
              styles.statusCurrent,
              { color: getStatusColor(currentMetricData.currentStatus) },
            ]}
          >
            {currentMetricData.currentStatus}
          </Text>
        </Text>

        {/* Status Indicator */}
        <StatusIndicator status={currentMetricData.currentStatus} />

        {/* Dropdown for Metric */}
        <View style={styles.dropdownContainer}>
          <TouchableOpacity
            style={styles.dropdownButton}
            onPress={toggleModal} // Toggle modal visibility
          >
            <Text style={styles.dropdownLabel}>
              {selectedMetric} ▼
            </Text>
          </TouchableOpacity>
        </View>

        {/* Modal for Metric Picker */}
        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
          <View style={styles.modalContent}>
            {["Temperature", "EC", "pH", "Humidity"].map((metric) => (
              <TouchableOpacity
                key={metric}
                style={styles.modalButton}
                onPress={() => {
                  setSelectedMetric(metric);
                  toggleModal();
                }}
              >
                <Text style={styles.modalText}>{metric}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>

        {/* Chart for selected metric */}
        <View style={styles.chartContainer}>
          <LineChart
            data={{
              labels: currentMetricData.chart.labels,
              datasets: [{ data: currentMetricData.chart.data }],
            }}
            width={320}
            height={200}
            yAxisSuffix={currentMetricData.chart.yAxisSuffix}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              strokeWidth: 2,
            }}
            bezier
            style={styles.chart}
          />
        </View>

        <Text style={styles.dateText}>February 8, 2025</Text>
      </View>

      {/* Report Section */}
      <View style={styles.reportCard}>
        <Text style={styles.reportTitle}>Today's Report 📢</Text>
        <View style={styles.reportItem}>
          <Text style={styles.reportTime}>Morning 🌅</Text>
          <Text style={styles.reportText}>
            Humidity low, needs adjustments
          </Text>
        </View>
        <View style={styles.reportItem}>
          <Text style={styles.reportTime}>Afternoon ☁️</Text>
          <Text style={styles.reportText}>pH level stable</Text>
        </View>
        <View style={styles.reportItem}>
          <Text style={styles.reportTime}>Evening 🌙</Text>
          <Text style={styles.reportText}>Temperature within range</Text>
        </View>
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
  card: {
    backgroundColor: "#FFFFFD",
    margin: 20,
    padding: 30,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    minHeight: 300,
  },
  statusText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statusCurrent: {
    fontWeight: "bold",
  },
  statusContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  circleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  statusCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    opacity: 0.5,
  },
  activeStatus: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    opacity: 1,
    borderWidth: 2,
    borderColor: "#000",
  },
  dropdownContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  dropdownButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  modalButton: {
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: "#f0f0f0",
  },
  modalText: {
    fontSize: 16,
    color: "#333",
  },
  chartContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  chart: {
    borderRadius: 10,
  },
  dateText: {
    textAlign: "right",
    fontSize: 12,
    color: "gray",
    marginTop: 10,
  },
  reportCard: {
    backgroundColor: "#FFFFFD",
    margin: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  reportItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 8,
  },
  reportTime: {
    fontWeight: "bold",
    fontSize: 14,
  },
  reportText: {
    fontSize: 12,
    color: "gray",
  },
});

export default Dashboard;
