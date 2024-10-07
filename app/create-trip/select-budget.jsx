import { View, Text, FlatList, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { SelectBudgetOption } from "../../constants/Options";
import OptionCard from "./../../components/CreateTrip/OptionCard";
import { TouchableOpacity } from "react-native";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectBudget() {
  const navigation = useNavigation();
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(CreateTripContext);
  // const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  // useEffect(() => {
  //   selectedOption &&
  //     setTripData({
  //       ...tripData,
  //       budget: selectedOption?.title,
  //     });
  // }, [selectedOption]);

  const onClickContinue = () => {
    if (!selectedOption) {
      ToastAndroid.show("Select Your Budget", ToastAndroid.LONG);
      return;
    }
    router.push("./review-trip");
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
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop: 20,
        }}
      >
        Budget
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
            // marginTop: 20,
          }}
        >
          Choose Sepending Habits for your trips
        </Text>

        <FlatList
          data={SelectBudgetOption}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{ marginVertical: 10 }}
              onPress={() => setSelectedOption(item)}
            >
              {/* console.navigation()  	 */}
              <OptionCard option={item} selectedOption={selectedOption} />
            </TouchableOpacity>
          )}
        />
      </View>

      <OptionCard optipon={item} selectedOption={selectedOption} />
      <Text>Choose Sepending habits for your tirps </Text>
      <Text>not choose sependionh habits for youur trips</Text>

      <TouchableOpacity
        onPress={() => onClickContinue()}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 10,
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
