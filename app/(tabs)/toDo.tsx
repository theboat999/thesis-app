import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ToDoScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <ScrollView style={styles.container}>
      {/* Header (copied from Dashboard) */}
      <View style={styles.header}>
        <Text style={styles.title}>POMODAERO 🌱</Text>
        <Text style={styles.subtitle}>To Do</Text>
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
});

export default ToDoScreen;
