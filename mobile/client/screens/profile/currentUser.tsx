import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchUserQuery } from '../../config/server/api/users';

export default function CurrentUser() { 
  const fakeId = '1';
  const { data, isLoading, error } = fetchUserQuery(fakeId);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Current user: {data ? data.name : 'No user data'}</Text>
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
