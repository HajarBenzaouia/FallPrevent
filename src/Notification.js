import * as React from "react";
import { View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3"
};

const tasks = [
  {
    task: "Notification1",
    theme: "#008b8b",
    stamp: "Saturday . 4pm"
  },
  {
    task: "Notification2",
    theme: "#008b8b",
    stamp: "Saturday . 4pm"
  }
];

const Task = ({ task, icon, theme, stamp }) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flexDirection: "row",
        marginHorizontal: 16,
        marginVertical: 4,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons
          name={icon}
          size={30}
          style={{ color: theme, marginRight: 5 }}
        />
        <View>
          <Text style={{ fontSize: 17 }}>{task}</Text>
          <Text style={{ color: colors.greyish }}>{stamp}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="trash-can"
          size={30}
          style={{ color: theme, marginLeft: 5 }}
          onPress={() => {
            alert('You delete this message!');
          }}
        />
      </View>
    </View>
  );
};

export default function Tasks(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.themeColor
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.themeColor} />
      <View style={{ backgroundColor: colors.themeColor }}>
        <View
          style={{
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <MaterialCommunityIcons
            name="text"
            size={30}
            style={{ color: colors.white }}
          />
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="logout"
              size={30}
              style={{ color: colors.white }}
              onPress={() => {
                ('You delete this mesalertsage!');
              }}
            />
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <Text style={{ color: colors.white, fontSize: 30 }}>
            {"Hello,"}
          </Text>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 6,
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: colors.tint,
              borderRadius: 20,
              marginVertical: 20,
              alignItems: "center"
            }}
          >
            <MaterialCommunityIcons
              name="magnify" //
              size={30}
              style={{ color: colors.white }}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          padding: 20,
          flexDirection: "row",
          backgroundColor: colors.background,
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: 20
        }}
      >
        <Text style={{ fontSize: 24 }}>Notifications</Text>
      </View>

      <ScrollView
        style={{
          backgroundColor: colors.background
        }}
      >
        {tasks.map(task => (
          <Task
            task={task.task}
            theme={task.theme}
            stamp={task.stamp}
          />
        ))}
      </ScrollView>
    </View>
  );
}