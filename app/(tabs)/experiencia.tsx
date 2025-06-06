import React, { useCallback, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const Experiencia = () => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: string) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  return (
    <View style={styles.container}>

  <YoutubePlayer
        height={500}
        play={playing}
        videoId={"kG6FK5SQFfM"}
        onChangeState={onStateChange}
      />
    </View>
  );
};

export default Experiencia;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  video: {
    width: '100%',
    height: 500,
  },
});