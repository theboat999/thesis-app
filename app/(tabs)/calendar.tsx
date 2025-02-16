import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import dayjs from 'dayjs';

const dumpData = {
  "2025-02-15": {
    Temperature: "22°C",
    Humidity: "45%",
    pH: "6.7",
    EC: "140 µS/cm",
  },
  "2025-02-16": {
    Temperature: "25°C",
    Humidity: "40%",
    pH: "6.8",
    EC: "150 µS/cm",
  },
  "2025-02-17": {
    Temperature: "23°C",
    Humidity: "42%",
    pH: "6.9",
    EC: "145 µS/cm",
  },
};

const CalendarScreen = () => {
  // Automatically set today's date in "YYYY-MM-DD" format.
  const today = dayjs().format('YYYY-MM-DD');
  const [selectedDate, setSelectedDate] = useState(today);

  const environmentalData = dumpData[selectedDate];
  // Format selected date to a more human-friendly format.
  const formattedDate = dayjs(selectedDate).format("MMMM D, YYYY");

  return (
    <ScrollView style={styles.container}>
      {/* Header (unchanged from Dashboard) */}
      <View style={styles.header}>
        <Text style={styles.title}>POMODAERO 🌱</Text>
        <Text style={styles.subtitle}>Dashboard</Text>
      </View>

      {/* Calendar */}
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, marked: true, selectedColor: '#4CAF50' },
          }}
          theme={{
            todayTextColor: 'red',
            selectedDayBackgroundColor: '#4CAF50',
            arrowColor: 'black',
          }}
        />
      </View>

      {/* Data Display */}
      <View style={styles.dataContainer}>
        {environmentalData ? (
          <View style={styles.dataCard}>
            <Text style={styles.dataTitle}>Reports from {formattedDate} 📢</Text>
            <View style={styles.divider} />
            <View style={styles.dataRow}>
              <Text style={styles.dataText}>🌡️ Temperature: {environmentalData.Temperature}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.dataRow}>
              <Text style={styles.dataText}>💧 Humidity: {environmentalData.Humidity}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.dataRow}>
              <Text style={styles.dataText}>🧪 pH: {environmentalData.pH}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.dataRow}>
              <Text style={styles.dataText}>🔌 EC: {environmentalData.EC}</Text>
            </View>
            <View style={styles.divider} />
          </View>
        ) : (
          <Text style={styles.noDataText}>No data available for {formattedDate}</Text>
        )}
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
  calendarContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: 'hidden',
  },
  dataContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  dataCard: {
    backgroundColor: "#FFFFFD",
    borderRadius: 15,
    padding: 20,
  },
  dataTitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 13,
  },
  dataRow: {
    paddingVertical: 5,
  },
  dataText: {
    fontSize: 16,
    marginBottom: 5,
  },
  divider: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  noDataText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
});

export default CalendarScreen;
