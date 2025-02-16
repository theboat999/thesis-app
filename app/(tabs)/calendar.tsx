{/* calendar.tsx */}
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: 'blue' }
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
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CalendarScreen;
