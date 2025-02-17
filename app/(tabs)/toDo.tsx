import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Dimensions 
} from 'react-native';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import dayjs from 'dayjs';

const { width } = Dimensions.get("window");

// Dump data for maintenance tasks
const dumpTodos = [
  { id: '1', task: 'Trim the roots of the tomato plant for proper growth' },
  { id: '2', task: 'Clean the hydroponic system filters' },
  { id: '3', task: 'Check water pH levels and adjust if necessary' },
  { id: '4', task: 'Inspect plant leaves for pests and diseases' },
];

const ToDoScreen = () => {
  const [todos, setTodos] = useState(dumpTodos);

  // Remove a todo item when swiped
  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Render an empty (transparent) right action to avoid showing any background or text.
  const renderRightActions = () => {
    return <View style={{ width: 80, backgroundColor: 'transparent' }} />;
  };

  // Get today's date in a human-friendly format.
  const today = dayjs().format("MMMM D, YYYY");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* Header (unchanged) */}
        <View style={styles.header}>
          <Text style={styles.title}>POMODAERO 🌱</Text>
          <Text style={styles.subtitle}>To Do</Text>
        </View>

        {/* Display Today's Date */}
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>Today: {today}</Text>
        </View>

        {/* To-Do List */}
        <View style={styles.todoList}>
          {todos.length === 0 ? (
            <Text style={styles.noTodoText}>No maintenance tasks scheduled.</Text>
          ) : (
            todos.map(todo => (
              <Swipeable
                key={todo.id}
                renderRightActions={renderRightActions}
                onSwipeableRightOpen={() => removeTodo(todo.id)}
                friction={2}
                overshootFriction={2}
              >
                <View style={styles.todoItem}>
                  <Text style={styles.todoText}>{todo.task}</Text>
                </View>
              </Swipeable>
            ))
          )}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
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
  dateContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  todoList: {
    paddingHorizontal: width * 0.05,
    marginTop: 20,
  },
  noTodoText: {
    textAlign: 'center',
    color: "#aaa",
    marginTop: 20,
    fontSize: 16,
  },
  todoItem: {
    backgroundColor: "#FFFFFD",
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 2,
  },
  todoText: {
    fontSize: 16,
    color: "#333",
  },
});

export default ToDoScreen;
