import { Image } from 'expo-image';
import { StyleSheet, Text, View } from "react-native";

const LuisImage = require('@/assets/images/image-pica.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={LuisImage} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Luis Florentino #2021-2158 </Text>
        <Text style={styles.text}>luisflorentino1999@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  textContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
});
