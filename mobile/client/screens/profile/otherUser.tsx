import { StyleSheet, Text, View } from 'react-native';

export default function OtherUser() {
  return (
    <View style={styles.container}>
      <Text>Other user</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});