import { StyleSheet, View, Image } from 'react-native'

export default function Logo() {
  return (
    <View style={styles.img}>
      <Image
        source={require("../assets/wfilandscape.png")}
        style={{ width: 380, height: 220, opacity: 0.7 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    paddingTop:80,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column'
    
  },
});