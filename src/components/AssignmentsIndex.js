import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AssignmentCard from "./AssignmentCard";
import Assignments from '../modules/assignments'

const AssignmentsIndex = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const getAssignmentsIndex = async () => {
      const response = await Assignments.index();
      setAssignments(response);
    };
    getAssignmentsIndex();
  }, []);

  return (
    <View style={styles.container}>
      <Text testID="welcome-message">Welcome to DevelUp</Text>
      <FlatList
        data={assignments}
        keyExtractor={(assignment) => assignment.id.toString()}
        renderItem={({ item }) => {
          return <AssignmentCard assignment={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AssignmentsIndex;
