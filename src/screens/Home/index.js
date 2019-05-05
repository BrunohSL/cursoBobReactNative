import React from 'react';

import { View, Text } from 'react-native';

export default (navigation) => {
  return(
    <View style={{flex: 1}}>
      <Text>Teste</Text>
      <Button title="Voltar" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}
