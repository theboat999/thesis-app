import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <ScrollView style={styles.container}>
      {/* Header (copied from Dashboard) */}
      <View style={styles.header}>
        <Text style={styles.title}>POMODAERO 🌱</Text>
        <Text style={styles.subtitle}>Calendar</Text>
      </View>

      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' },
          }}
          theme={{
            todayTextColor: 'red',
            selectedDayBackgroundColor: 'blue',
            arrowColor: 'blue',
          }}
        />
        {selectedDate ? (
          <Text style={styles.text}>Selected Date: {selectedDate}</Text>
        ) : null}
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
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CalendarScreen;
