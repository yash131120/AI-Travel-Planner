import { View, Text, ToastAndroid } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import { TouchableOpacity } from "react-native";
import moment from "moment";
// import { CreateTripContext } from "./../../context/CreateTripContext";

export default function selectDates() {
  const navigation = useNavigation();
  const router = useRouter();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  // const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const onDateChange = (data, type) => {
    console.log(data, type);
    if (type == "START_DATE") {
      setStartDate(moment(data));
    } else {
      setStartDate(moment(data));
    }
  };

  const OnDateSelectionContinue = () => {
    if (!startDate && !endDate) {
      ToastAndroid.show("Please select Start and End Date", ToastAndroid.LONG);
    } else { 
      router.push("/create-trip/select-budget");
    }
    // const totalNoofDays = endDate.diff(startDate, "days");
    // console.log(totalNoofDays + 1);              ...............count total date error "diff"
    // setTripData({
    //   ...tripData,
    //   startDate: startDate,
    //   endDate: endDate,
    //   totalNoofDays: totalNoofDays + 1,
    // });
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 35, fontFamily: "outfit-bold", marginTop: 20 }}>
        Travel Dates
      </Text>
      <View style={{ marginTop: 30 }}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={5}
          selectedRangeStyle={{ backgroundColor: Colors.PRIMARY }}
          selectedDayTextStyle={{
            color: Colors.WHITE,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={OnDateSelectionContinue}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 35,
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
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
