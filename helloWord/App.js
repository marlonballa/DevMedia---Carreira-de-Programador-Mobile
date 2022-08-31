//Primeiro passo: Importar o componente React
import React from 'react';
//Componentes que serão utlizados para o desenvolvimento do componente deste arquivo. 
import { View, Text, StyleSheet } from 'react-native'

//O componente React é o responsável pela criação dos componentes que serão exportados. 
export default function App() {
  return (
    <View style={helloWordStyle.container}>
      <Text style={helloWordStyle.text}>Hello Word!</Text>
      <Text>Criado por Marlon balla</Text>
    </View>
    );
  }

  const helloWordStyle = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: '#000',
      fontSize: 40
    }
  });