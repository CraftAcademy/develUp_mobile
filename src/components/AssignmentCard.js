import React from "react";
import { View, Text } from "react-native";

const AssignmentCard = ({ assignment }) => {
  return (
    <View>
      <Text>{assignment.title}</Text>
      <Text>{assignment.points}</Text>
      <Text>{assignment.skills}</Text>
      <Text>{assignment.budget}</Text>
    </View>
  );
};

export default AssignmentCard;
