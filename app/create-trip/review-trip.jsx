import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CreateTripContext } from "./../../context/CreateTripContext";
import moment from "moment";

export default function ReviewTrip() {
  const navigation = useNavigation();
  const router = useRouter();
  // const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop: 20,
        }}
      >
        Review your Trip
      </Text>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          Before generating your trip, please review your selection
        </Text>

        {/* Destination Info     */}
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
          <Text style={{ fontSize: 35 }}>📍</Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              /*location for trip*/
            </Text>
            {/* <Text>{tripData?.locationInfo?.name}</Text> */}
          </View>
        </View>

        {/* Date Selected Info     */}
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
          <Text style={{ fontSize: 35 }}>📆</Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Travel Date
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              /*Date for trip: Start-End*/
              {/* {moment(tripData?.startDate).format("DD MMM")} */}
            </Text>
          </View>
        </View>

        {/* Date Selected Info     */}
        <View
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            gap: 20,
          }}
        >
          {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
          <Text style={{ fontSize: 35 }}></Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: Colors.GRAY,
              }}
            >
              Budget
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              /*location for trip*/
              {/* {moment(tripData?.startDate).format("DD MMM")} */}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
