import { Button, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import * as Location from "expo-location";
import { mapsApiKey } from "@env";

export default function LocationManager() {
  const [status, requestPermission] = Location.useForegroundPermissions();
  const [location, setLocation] = useState(null);

  async function verifyPermission() {
    if (status.granted) {
      return true;
    }
    try {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    } catch (err) {
      console.log(err);
    }
  }

  async function locateUserHandler() {
    try {
      const havePermission = await verifyPermission();
      if (!havePermission) {
        Alert.alert("You need to give permission");
        return;
      }
      const receivedLocation = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: receivedLocation.coords.latitude,
        longitude: receivedLocation.coords.longitude,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Button title="Locate me" onPress={locateUserHandler} />
      {location && (
        <Image
          style={styles.image}
          source={{
            uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${mapsApiKey}`,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  image: { width: 200, height: 200 },
});
