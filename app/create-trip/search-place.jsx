import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { React, useEffect, useContext } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { CreateTripContext } from "./../../context/CreateTripContext";

export default function SearchPlace() {
  const navigation = useNavigation();

  // const { tripData, setTripData } = useContext(CreateTripContext);

  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
  }, []);

  // useEffect(() => {
  //   console.log(tripData);
  // }),
  //   [tripData];

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 80,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      {/* <View style={{ borderWidth: 1 }} /> */}
      <GooglePlacesAutocomplete
        placeholder="Search Place"
        fetchDetails={true}
        onFail={(error) => console.log(error)}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setTripData({
            locationInfo: {
              // name: data.description,
              // coordinates: details?.geometry.location,
              // photoRef: details?.photos[0]?.photo_reference,
              // url: details?.url,
            },
          });
          // router.push("/create-trip/select-traveler");
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
        }}
        styles={{
          textInputContainer: {
            paddingHorizontal: 10,
            // height: "100%",
            // fontSize: 18,
            borderWidth: 1,
            borderRadius: 15,
            marginTop: 15,
          },
        }}
      />

      <TouchableOpacity
        onPress={() => router.push("create-trip/select-traveler")}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "outfit-medium",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Who's Going
        </Text>
      </TouchableOpacity>
    </View>
  );
}
