import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const ButtonTest = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            LOG IN FCKER
          </Text>
          <Button
            onPress={() => navigation.navigate('Login as Guest')}
            title="Login as Guest"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ButtonTest;